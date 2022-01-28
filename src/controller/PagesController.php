<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ .  '../../model/Image.php';


class PagesController extends Controller {

  public function index() {

    $images = Image::all();
    foreach ($images as $image) {
      $this->set($image->name, $image->value);
    }



    if (!empty($_GET['input'])) {
      $input_text = $_GET['input'];

      if (strlen($input_text) >= 19) {
        $result_lower = substr($input_text, 0, 19);
        $result_upper = substr($repeat, 0, 12);

      } else {
        $remainder = 19 / strlen($input_text);
        $number = ceil($remainder);

        $repeat = str_repeat($input_text, $number);
        $result_lower = substr($repeat, 0, 19);
        $result_upper = substr($repeat, 0, 12);


      }


    } else {
      $result_lower = "abcdefghjknoprstwxy";
      $result_upper= "ABDEGHJMQRSW";


    }

    $this->set('result_lower', $result_lower);
    $this->set('result_upper', $result_upper);

  }
}
