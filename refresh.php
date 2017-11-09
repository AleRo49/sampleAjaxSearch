<?php

  $postDatas = $_POST;

  if (!empty($postDatas['search']['keywords'])){

    $keywords = explode(' ', $postDatas['search']['keywords']); // Chaine vers un tableau
    $keywords = array_unique($keywords); // Dédoublonnage des mots clés

    echo "<p>J'ai lancé une recherche avec les mots clés : <b>".implode(', ', $keywords)."</b></p>";
  } else {
    echo '<p>Merci de remplir le champ</p>';
  }
