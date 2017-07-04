<?php
  //todo: set extra include dir on matching subdirectory in includes
  //todo: make creating object the only thing needed to run (bootstrap in includes?)
  class Viller
  {
    public $rootDir;
    public $pageDir;
    public $pageDirWeb;

    public $path;

    /** Contains path arguments by index (order of appearance in path), and by key (treating value as the next item in path) */
    public $pathArgs;

    public $dbConnectionString;
    public $dbUsername;
    public $dbPassword;
    private $pdo;

    /** Initializes this class and it's static variables. */
    public function __construct($dbConnectionString = null, $dbUsername = null, $dbPassword = null)
    {
      $this->rootDir = $this->formatDir($_SERVER["DOCUMENT_ROOT"]);
      $this->pageDir = $this->formatDir(dirname($_SERVER["SCRIPT_FILENAME"]));
      $this->pageDirWeb = "/" . str_replace($this->rootDir, "", $this->pageDir);

      $this->path = isset($_SERVER["PATH_INFO"]) ? $_SERVER["PATH_INFO"] : "";
      //path args by index
      $this->pathArgs = $this->path ? array_values(array_filter(explode("/", $this->path))) : [];

      //path args by key
      $argumentCount = count($this->pathArgs);
      for($i = 0; $i < $argumentCount; $i++)
      {
        $key = $this->pathArgs[$i];
        $value = isset($this->pathArgs[$i + 1]) ? $this->pathArgs[$i + 1] : false;

        //only use non-numerics as key (they could conflict)
        if (is_numeric($key))
          continue;

        $this->pathArgs[$this->pathArgs[$i]] = $value;
      }

      $this->dbConnectionString = $dbConnectionString;
      $this->dbUsername = $dbUsername;
      $this->dbPassword = $dbPassword;
    }

    /** Returns url relative to entry page (still relative to web root) or relative to web root. */
    public function getUrl($url)
    {
      if (substr($url, 0, 1) == "/")
        return $url;
      
      return $this->pageDirWeb . $url;
    }

    private function ensureConnected()
    {
      //only connect when not connected yet
      if ($this->pdo)
        return;

      if (!$this->dbConnectionString)
        throw new Exception("dbConnectionString not set at connect time.");

      try
      {
        $this->pdo = new PDO($this->dbConnectionString, $this->dbUsername, $this->dbPassword, [ PDO::ATTR_PERSISTENT => true ]);
      }
      catch (Exception $e)
      {
        throw new Exception("Could not connect to database.");
      }
    }

    public function query($query, $params)
    {
      $this->ensureConnected();

      $statement = $this->pdo->prepare($query);
      $statement->execute($params);
      return $statement->fetchAll(PDO::FETCH_OBJ);
    }

    /** Display detailed and optionally html-formatted info about a variable. */
    public static function getVarInfo($var, $asHtml = true)
    {
      $result = "";
      
      //object
      if (is_object($var))
      {   
        $reflectionClass = new ReflectionClass($var);
        
        //class
        $modifiers = Reflection::GetModifierNames($reflectionClass->getModifiers());
        if ($modifiers)
          $result .= implode(" ", $modifiers) . " ";
        $result .= $reflectionClass->getName();
        
        //parents
        $parentClass = $reflectionClass;
        while ($parentClass = $parentClass->getParentClass())
        {
          $result .= " : " . $parentClass->getName();
        }
        $result .= "\n";
        
        //properties
        if ($properties = $reflectionClass->getProperties())
        {
          usort($properties, function($property1, $property2) {
            return strcmp($property1->name, $property2->name);
          });
          
          $result .= "  Properties:\n";
          foreach($properties as $property)
          {
            $result .= "\t";
            $modifiers = Reflection::GetModifierNames($property->getModifiers());
            if ($modifiers)
              $result .= implode(" ", $modifiers) . " ";
            $result .= "$" . $property->getName();
            
            //current value
            if (isset($var->{$property->getName()}))
              $result .= " = " . self::GetVarValue($var->{$property->getName()});
            elseif (isset($var::${$property->getName()}))
              $result .= " = " . self::GetVarValue($var::${$property->getName()});
              
            $result .= "\n";
          }
        }
        
        //methods
        if ($methods = $reflectionClass->getMethods())
        {
          usort($methods, function($method1, $method2) {
            return strcmp($method1->name, $method2->name);
          });
          
          $result .= "  Methods:\n";
          foreach ($methods as $method)
          {
            //do not show parent private methods. (Is this a PHP bug? This works as expected for properties.)
            if ($method->isPrivate() && $method->class != $reflectionClass->name)
              continue;
            
            $result .= "\t";
            $modifiers = Reflection::GetModifierNames($method->getModifiers());
            if ($modifiers)
              $result .= implode(" ", $modifiers) . " ";
            $result .= $method->name . "(";
            
            //parameters
            if ($parameters = $method->getParameters())
            {
              foreach($parameters as $id => $parameter)
              {
                if ($id)
                  $result .= ", ";
                  
                if ($parameter->isPassedByReference())
                  $result .= "&";
                
                $result .= "$" . $parameter->name;
                
                if ($parameter->isDefaultValueAvailable())
                  $result .= " = " . self::GetVarValue($parameter->getDefaultValue());
              }
            }
            
            $result .= ")\n";       
          }
        }
      }
      else //other variable types
      {
        $result = print_r($var, true);
      }   
      
      if ($asHtml)
        $result = self::StringToHtml($result);
        
      return $result;
    }

    /**
     * Like htmlspecialchars, but it also encodes things like tab and space characters explicitly.
     * Mainly for debug output to html.
     */
    public static function stringToHtml($string)
    {
      static $search =  ["\t",                       " "];
      static $replace = ["&nbsp;&nbsp;&nbsp;&nbsp;", "&nbsp;"];
      
      $string = htmlspecialchars($string);
      $string = str_ireplace($search, $replace, $string);
      $string = nl2br($string);
      
      return $string;     
    }

    /** Return a well-formatted description of a variable. */
    public static function getVarValue($var)
    {
      return json_encode($var, JSON_UNESCAPED_SLASHES);
    }

    /** Adds a trailing slash to a directory if it doesn't have one. */
    public static function formatDir($dir)
    {
      if (substr($dir, -1) != "/")
        return $dir . "/";
      
      return $dir;
    }
  }
?>
