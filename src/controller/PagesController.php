<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ .  '../../model/Image.php';


class PagesController extends Controller {

  public function index() {

    $images = Image::all();
    foreach ($images as $image) {
      $this->set($image->name, $image->value);
    }
  }
}
