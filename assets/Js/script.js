function Header() {
	return (
		<header>
			<nav>
				<img src="my-app/src/logo.svg" />
				<ul>
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}

function MainCont() {
	return (
		<div>
			<h1>Fun facts about React</h1>
			<ol>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ol>
		</div>
	);
}

function Footer() {
	return (
		<div>
			<footer>@ 2023 Khemu development. All rights reserved.</footer>
		</div>
	);
}

function Cont() {
	return (
		<div className="parent">
			<Header />
			<div className="cont">
				<MainCont />
				<Footer />
			</div>
		</div>
	);
}

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Cont />);
