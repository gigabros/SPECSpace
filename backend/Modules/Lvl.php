<?php

    class addlvl{

        public function add_lvl($lvl,$exp){

            if($lvl <= 10 && $lvl >! 11){

                if($exp >= 500){
                    $profile = array(1 , $exp-500);

                    return $profile;               

                }
                else{
                    return $profile =array (0,$exp);
                }
                

            }
            else if($lvl <= 11 && $lvl <! 10 && $lvl >! 21){
                if($exp >= 1000){
                    $profile = array(1 , $exp-1000);

                    return $profile;               

                }
                else{
                    return $profile =array (0,$exp);
                }

            }
            else if($lvl <= 21 && $lvl <! 20 && $lvl >! 31){
                if($exp >= 1500){
                    $profile = array(1 , $exp-1500);

                    return $profile;               

                }
                else{
                    return $profile =array (0,$exp);
                }

            }
            else if($lvl <= 31 && $lvl <! 30 && $lvl >! 41){
                if($exp >= 2000){
                    $profile = array(1 , $exp-2000);

                    return $profile;               

                }
                else{
                    return $profile =array (0,$exp);
                }
            }
            else if($lvl <= 41 && $lvl <! 40){
                if($exp >= 3000){
                    $profile = array(1 , $exp-3000);

                    return $profile;               

                }
                else{
                    return $profile =array (0,$exp);
                }

            }
            else if($lvl = 50){
                return $profile =array (0, $exp);
            }
            else{
                echo "error";
            }


        }

}
