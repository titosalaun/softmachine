<header>
    <nav>
	    <?php if ($page != "projet") {?>
	        <div class="logo"><a href="home">Thblt.Pr</a> <?php if ($preview) echo '<span class="preview">preview</span> <span class="etat_preview"></span>';?></div>
	        <div class="signature"><a href="info">Info</a></div>
	        <div class="info"><a target="_blank"href="<?php echo $follow;?>">Follow</a></div>
        <?php } else {?>
        	<div class="info_projet"><a href="info">Info</a></div>
        <?php } ?>
    </nav>
</header>