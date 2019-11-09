<?php 
    //$Nombre = $_POST['Nombre'];
    
    function func1($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT ID, concat_ws(' ',NOMBRE,APELLIDOP, APELLIDOM) as 'Name', EDAD, SEXO, TIPO, ESTATURA FROM `infobasica` WHERE concat_ws(' ',NOMBRE,APELLIDOP, APELLIDOM) like '%$data%'";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function funcNormales($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT * FROM `consultanormal` WHERE IDP = '$data'";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function funcDeport($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT * FROM `consultadeportista` WHERE IDP = '$data'";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function resultsDep($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT * FROM `consultadeportista` WHERE IDP = '$data[0]' and FechaConsulta <= '$data[1]' ";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    if (isset($_POST['callFunc1'])) {
        echo func1($_POST['callFunc1']);
    }

    if (isset($_POST['callFuncNormales'])) {
        echo funcNormales($_POST['callFuncNormales']);
    }

    if (isset($_POST['callFuncDeport'])) {
        echo funcDeport($_POST['callFuncDeport']);
    }

    if (isset($_POST['callresultsdep'])) {
        echo resultsDep($_POST['callresultsdep']);
    }


?>