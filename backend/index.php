<?php
    require_once "./config/Connection.php";
    require_once "./Modules/Global.php";
    require_once "./Modules/Get.php";
    require_once "./Modules/Post.php";
    require_once "./Modules/Lvl.php";


    $db = new Connection;
    $pdo = $db->connect();
    $get = new Get($pdo);
    $post = new Post($pdo);
    $add_lvl = new addlvl();
    $data = json_decode(file_get_contents("php://input"));

    if(isset($_REQUEST['request'])){
        $req = explode('/', rtrim($_REQUEST['request'], '/') );
    
    }
    else{
        http_response_code(404);
    }

    if($_SERVER['REQUEST_METHOD'] ==='OPTIONS'){
        header('HTTP/1.1 200 OK');
        exit();
    }

    switch($_SERVER['REQUEST_METHOD']){

        case 'GET':
            switch($req[0]){
                case 'account':
                    echo json_encode($get->get_accounts());
                break;

                case 'profile':
                    if(count($req)>1){
                        echo json_encode($get->get_profile($req[1]));
                    }
                break;

                case 'lb_points':
                    echo json_encode($get->get_lb_points());
                break;

                case 'lb_lvl':
                    echo json_encode($get->get_lb_lvl());
                break;

                case 'activity':
                    echo json_encode($get->get_activity()); 
                break;

                case 'select_activity':
                    echo json_encode($get->select_activity($req[1])); 
                break;
                
                case "date":
                    echo date("h:i a/ d-m-Y");
                break;
                case "get_posts":
                    echo json_encode(($get->get_posts()));
                break;
                case "get_finished":
                    echo json_encode(($get->get_finished_submits($req[1])));
                break;
                case "get_submitted":
                    echo json_encode($get->get_submitted_submits($req[1]));
                break;
                case "get_status":
                    echo json_encode($get->get_role($req[1]));
                break;
                case "get_list_submits":
                    echo json_encode($get->get_list_submition($req[1]));
                break;
                case "get_list_profile":
                    echo json_encode($get->get_list_profile());
                break;
                case "get_list_unverified":
                    echo json_encode($get->get_list_unverified());
                break;
                case "download":
                    echo json_encode($get->download($req[1],$req[2]));
                break;
                case "board_points":
                    echo json_encode($get->board_points());
                break;

                case "board_lvl":
                    echo json_encode($get->board_points());
                break;

                case "achieve_submitted":
                    echo json_encode($get->get_students_submits($req[1]));
                break;
                
                case "get_list_sub":
                    echo json_encode($get->get_submits($req[1]));
                break;

                case "chech_dupe":
                    echo json_encode($get->check_dup_submit($req[1],$req[2]));
                break;
                
            }
        
        break;

        case 'POST':
            switch($req[0]){
                case "add_activity":
                    echo json_encode($post->add_activity($data));
                break;

                case "add_post":
                    echo json_encode($post->add_post($data));
                break;

                case "add_account":
                    echo json_encode($post->add_account($data));
                break;

                case "login":
                    echo json_encode($post->login($data));
                break;

                case "submit":
                    echo json_encode($post->submit_activity($data));
                break;

                case "verify":
                    echo json_encode($post->verify_account($data));
                break;

                case "finish":
                    echo json_encode($post->finish_activity($data));
                break;
                case "update_exp_lvl":
                    echo json_encode($post->add_exp_points($req[1],$req[2],$req[3]));
                break;
                case "delete_act":
                    echo json_encode($post->delete_act($data));
                break;
                case "delete_post":
                    echo json_encode($post->delete_post($data));
                break;
                
                case "file_upload":
                    $check = $get->check_dup_submit($_POST['stud_num'],$_POST['act_id']);
                    if($check){
                        if(isset($_FILES['file'])){
                            $act_id=$_POST['act_id'];
                            $stud_num = $_POST['stud_num'];
                            $date = date("Y-m-d");
                            $target_dir = 'files/';
                            $file_name= $_FILES['file']['name'];
                            $target_file = $target_dir.basename($_FILES['file']['name']);
                            if(move_uploaded_file($_FILES['file']['tmp_name'],$target_file)){
                                $sql = "UPDATE `submits` SET file_name=?,file_loc=?,date=? WHERE act_id='$act_id' AND stud_num=$stud_num";
                                $stmt = $pdo->prepare($sql);
                                $stmt->execute([$file_name,$target_file,$date]);
                                echo "Resubmitted Successfuly";
                            }else{
                                echo "Fail";
                            }
                        }
                        else{
                            echo "No Files";
                        }
                    }
                    else{
                        if(isset($_FILES['file'])){
                            $date = date("Y-m-d");
                            $target_dir = 'files/';
                            $file_name= $_FILES['file']['name'];
                            $target_file = $target_dir.basename($_FILES['file']['name']);
                            if(move_uploaded_file($_FILES['file']['tmp_name'],$target_file)){
                                $sql = "INSERT INTO `submits`(`act_id`, `stud_num`, `file_name`, `file_loc`, `status`, `name`, `date`) 
                                VALUES (?,?,?,?,?,?,?)";
                                $stmt= $pdo->prepare($sql);
                                $stmt->execute([$_POST['act_id'],$_POST['stud_num'],$file_name,$target_file,1,$_POST['name'],$date]);
    
                                echo "Submitted Success Fully";
                            }else{
                                echo "Fail";
                            }
                        }
                        else{
                            echo "No Files";
                        }
                    }
                    
                break;

                case "reject_submit":
                    echo json_encode($post->reject_submit($data));
                break;
            }
        
        break;
        

        case 'PATCH':
            echo 'Patch';
        
        break;

        
        default:
            http_response_code(403);
        break;





    }
