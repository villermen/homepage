<div class="project-buttons">
    <?php foreach($buttonData as $data): ?>
        <a class="project-button <?=$data[1]?>" href="<?=$data[2]?>" title="<?=$data[0]?>">
            <img class="project-image" src="<?=$baseUrl."images/project-buttons/".$data[3]?>" alt="<?=$data[0]?>" />
        </a>
    <?php endforeach; ?>
</div>
