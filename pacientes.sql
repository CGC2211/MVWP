-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2019 a las 19:54:37
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pacientes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultadeportista`
--

CREATE TABLE `consultadeportista` (
  `FechaConsulta` date NOT NULL,
  `IDP` int(11) NOT NULL,
  `Peso` double NOT NULL,
  `Bicep` double NOT NULL,
  `Tricep` double NOT NULL,
  `Subescapular` double NOT NULL,
  `Crestai` double NOT NULL,
  `Suprae` double NOT NULL,
  `Abdominal` double NOT NULL,
  `MusloMedio` double NOT NULL,
  `Pantorrilla` double NOT NULL,
  `BicepRelax` double NOT NULL,
  `BicepFlex` double NOT NULL,
  `CinMin` double NOT NULL,
  `CadMax` double NOT NULL,
  `PantMax` double NOT NULL,
  `Humero` double NOT NULL,
  `Femur` double NOT NULL,
  `VO2Max` double NOT NULL,
  `Umbral` double NOT NULL,
  `RMBench` double NOT NULL,
  `RMSquat` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `consultadeportista`
--

INSERT INTO `consultadeportista` (`FechaConsulta`, `IDP`, `Peso`, `Bicep`, `Tricep`, `Subescapular`, `Crestai`, `Suprae`, `Abdominal`, `MusloMedio`, `Pantorrilla`, `BicepRelax`, `BicepFlex`, `CinMin`, `CadMax`, `PantMax`, `Humero`, `Femur`, `VO2Max`, `Umbral`, `RMBench`, `RMSquat`) VALUES
('2019-10-28', 2, 82, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 100, 10, 125, 145),
('2019-10-04', 5, 82, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 44, 10, 125, 185),
('2019-11-04', 5, 80, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 46, 11, 145, 195),
('2019-11-05', 6, 80, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 46, 106, 195, 205);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultanormal`
--

CREATE TABLE `consultanormal` (
  `FechaConsulta` date NOT NULL,
  `IDP` int(11) NOT NULL,
  `Peso` double NOT NULL,
  `CircCint` double NOT NULL,
  `CircCad` double NOT NULL,
  `PlieBic` double NOT NULL,
  `PlieTric` double NOT NULL,
  `PorGra` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `consultanormal`
--

INSERT INTO `consultanormal` (`FechaConsulta`, `IDP`, `Peso`, `CircCint`, `CircCad`, `PlieBic`, `PlieTric`, `PorGra`) VALUES
('2019-10-29', 3, 95, 112.5, 105, 34, 34, 31.5),
('2019-10-31', 4, 86, 80, 85, 32, 33, 20),
('2019-10-31', 1, 110, 121, 128, 33, 32, 33.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infobasica`
--

CREATE TABLE `infobasica` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(256) COLLATE latin1_spanish_ci NOT NULL,
  `APELLIDOP` varchar(256) COLLATE latin1_spanish_ci NOT NULL,
  `APELLIDOM` varchar(256) COLLATE latin1_spanish_ci NOT NULL,
  `SEXO` varchar(256) COLLATE latin1_spanish_ci NOT NULL,
  `EDAD` int(255) NOT NULL,
  `ESTATURA` double NOT NULL,
  `Tipo` varchar(55) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `infobasica`
--

INSERT INTO `infobasica` (`ID`, `NOMBRE`, `APELLIDOP`, `APELLIDOM`, `SEXO`, `EDAD`, `ESTATURA`, `Tipo`) VALUES
(1, 'Carlos', 'Gutierrez', 'Cota', 'Masculino', 28, 184, 'Normal'),
(3, 'Juan', 'perez', 'prado', 'Masculino', 28, 174.5, 'Normal'),
(4, 'Juan', 'Maldonado', 'Martinez', 'Masculino', 21, 185, 'Normal'),
(5, 'Luis Alfonso', 'Fonseca', 'Vidrio', 'Masculino', 29, 177, 'Deportista'),
(6, 'Manuel', 'Vazquez', 'Bautista', 'Masculino', 29, 177, 'Deportista');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultadosdeportista`
--

CREATE TABLE `resultadosdeportista` (
  `Densidad` float NOT NULL,
  `Brozec` float NOT NULL,
  `Siri` float NOT NULL,
  `Masao` float NOT NULL,
  `FechaConsulta` date NOT NULL,
  `masarh` float NOT NULL,
  `masarm` float NOT NULL,
  `brozeck` float NOT NULL,
  `sirik` float NOT NULL,
  `rosemm` float NOT NULL,
  `rosep` float NOT NULL,
  `mlg` float NOT NULL,
  `dwhi` float NOT NULL,
  `sirig` float NOT NULL,
  `brozecg` float NOT NULL,
  `dwhim` float NOT NULL,
  `brozecgm` float NOT NULL,
  `sirigm` float NOT NULL,
  `durinc` float NOT NULL,
  `durinm` float NOT NULL,
  `IDP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `resultadosdeportista`
--

INSERT INTO `resultadosdeportista` (`Densidad`, `Brozec`, `Siri`, `Masao`, `FechaConsulta`, `masarh`, `masarm`, `brozeck`, `sirik`, `rosemm`, `rosep`, `mlg`, `dwhi`, `sirig`, `brozecg`, `dwhim`, `brozecgm`, `sirigm`, `durinc`, `durinm`, `IDP`) VALUES
(1.0618, 16.181, 16.1676, 18.2721, '2019-10-04', 19.762, 17.138, 13.2684, 13.2574, 30.7085, 52.9456, 68.7315, 1.0708, 12.2711, 12.5837, 1.0564, 18.3613, 18.5292, 1.1631, 0.0632, 5),
(1.0592, 17.2439, 17.3189, 20.9281, '2019-11-04', 19.28, 16.72, 13.7952, 13.8551, 25.9367, 44.7185, 66.2048, 1.068, 13.7026, 13.4831, 1.0531, 19.7715, 20.0567, 1.1631, 0.0632, 5),
(1.05923, 17.2439, 17.3189, 20.9281, '2019-11-05', 19.28, 16.72, 13.7952, 13.8551, 25.9367, 44.7185, 66.2048, 1.068, 13.4831, 13.7026, 1.05306, 19.7715, 20.0567, 1.1631, 0.0632, 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `infobasica`
--
ALTER TABLE `infobasica`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID_2` (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `infobasica`
--
ALTER TABLE `infobasica`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
