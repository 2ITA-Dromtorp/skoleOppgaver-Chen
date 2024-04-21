# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `create the database`

````sql
-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 21, 2024 at 05:37 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

--
-- Database: `dromtorplending`
--

-- --------------------------------------------------------

--
-- Table structure for table `lending`
--

CREATE TABLE `lending` (
  `LendingID` int(10) NOT NULL, -- Unique id for lending
  `EquipmentType` int(10) NOT NULL, -- Foreign key to equipment
  `ElevID` int(10) NOT NULL, -- Foreign key to student
  `Date` date NOT NULL -- Date of lending
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lending`
--

INSERT INTO `lending` (`LendingID`, `EquipmentType`, `ElevID`, `Date`) VALUES
(1, 1, 1, '2024-04-20'),
(2, 18, 6, '2024-04-02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lending`
--
ALTER TABLE `lending`
  ADD PRIMARY KEY (`LendingID`),
  ADD KEY `EquipmentType` (`EquipmentType`,`ElevID`),
  ADD KEY `n` (`ElevID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lending`
--
ALTER TABLE `lending`
  MODIFY `LendingID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lending`
--
ALTER TABLE `lending`
  ADD CONSTRAINT `m` FOREIGN KEY (`EquipmentType`) REFERENCES `equipment` (`EquipmentID`),
  ADD CONSTRAINT `n` FOREIGN KEY (`ElevID`) REFERENCES `students` (`ElevID`);
COMMIT;
````


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
