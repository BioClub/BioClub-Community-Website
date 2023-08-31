<?php namespace ProcessWire; 

// Template file for pages using the “basic-page” template

?>

<div id="content">
   <h1 class="f1">
     <?php echo $page->title; ?>
 <?php if($page->editable()): ?><a href='<?php echo $page->editUrl(); ?>'>&nbsp;&nbsp;&nbsp;</a></p><?php endif; ?>
   </h1>
   <div class="lh-copy">
 <?php echo $page->content; ?>
   </div>
   <div id="byline" class="pv5 moon-gray">
     Author: <?php $createdUser = $page->createdUser; echo $createdUser->user_display_name; ?><br />
     Published: <?php echo date('l jS \of F Y h:i:s A', $page->published); ?>, 
     Last Update: <?php echo date('l jS \of F Y h:i:s A', $page->modified); ?>
     <?php if($page->editable()): ?><a href='<?php echo $page->editUrl(); ?>'>Edit</a></p><?php endif; ?>
   </div>
</div>
