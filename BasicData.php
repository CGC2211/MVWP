<?php
$Nombre = $_POST['Nombre'];
$Paterno = $_POST['Paterno'];
$Materno = $_POST['Materno'];
$Sexo = $_POST['Sexo'];
$Edad = $_POST['Edad'];
$Estatura = $_POST['Estatura'];
$tipo = $_POST['Tipo'];

//Converción a double
//$intPeso = (double)$Peso;
//$intTalla = (double)$Talla;

//Cálculo del IMC
//$IMC = $intPeso / (pow($intTalla,2));
//conexión a base de datos y consulta
$conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
$sql = "INSERT INTO infobasica (NOMBRE, APELLIDOP, APELLIDOM, SEXO, EDAD, ESTATURA, TIPO) VALUES ('$Nombre','$Paterno','$Materno','$Sexo','$Edad','$Estatura', '$tipo')";

if (mysqli_query($conn, $sql)) {
            $sql = "Select ID from infobasica where Nombre = '$Nombre' and APELLIDOP = '$Paterno' and APELLIDOM = '$Materno' and Tipo = '$tipo'  ";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    echo $row["ID"];
                }
            } 

   	  	  //echo "<script>alert('Usuario Guardado exitosamente');</script>";
			//header('location: index2.php');
	  
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
} 
 
?>