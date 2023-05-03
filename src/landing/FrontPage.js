import React, { useRef, useState } from "react";
import styles from "./FrontPage.module.css";

const FrontPage = (props) => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const [isFirstNameValid, setIsFirstNameValid] = useState(true);
	const [isLastNameValid, setIsLastNameValid] = useState(true);
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const [isFormValid, setIsFormValid] = useState(true);
	const formSubmitHandler = (event) => {
		event.preventDefault();

		const enteredFirstName = firstNameRef.current.value;
		const enteredLastName = lastNameRef.current.value;
		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;

		console.log(
			enteredEmail,
			enteredLastName,
			enteredFirstName,
			enteredPassword
		);

		if (enteredFirstName.trim().length <= 0) {
			setIsFirstNameValid(false);
		} else {
			setIsFirstNameValid(true);
		}
		if (enteredLastName.trim().length <= 0) {
			setIsLastNameValid(false);
		} else {
			setIsLastNameValid(true);
		}

		if (!enteredEmail.includes("@")) {
			setIsEmailValid(false);
		} else {
			setIsEmailValid(true);
		}
		if (enteredPassword.trim().length <= 0) {
			setIsPasswordValid(false);
		} else {
			setIsPasswordValid(true);
		}

		if (
			enteredFirstName.trim().length <= 0 ||
			enteredLastName.trim().length <= 0 ||
			!enteredEmail.includes("@") ||
			enteredPassword.trim().length <= 0
		) {
			setIsFormValid(false);
			return;
		} else {
			setIsFormValid(true);
			props.onClick();
		}
	};

	const inputFirstNameStyles = `${isFirstNameValid ? "" : styles.invalid}`;
	const inputLastNameStyles = `${isLastNameValid ? "" : styles.invalid}`;
	const inputEmailStyles = `${isEmailValid ? "" : styles.invalid}`;
	const inputPasswordStyles = `${isPasswordValid ? "" : styles.invalid}`;

	return (
		<div className={styles.frontpage}>
			{/* <div className={styles.bubble}>
				<h1>Bubble Sort</h1>
			</div>
			<div className={styles.selection}>
				<h1>Selction Sort</h1>
			</div>
			<div className={styles.shell}>
				<h1>Shell Sort</h1>
			</div>
			<div className={styles.quick}>
				<h1>Quick Sort</h1>
			</div>
			<div className={styles.insertion}>
				<h1>Insertion Sort</h1>
			</div>
			<div className={styles.merge}>
				<h1>Merge Sort</h1>
			</div> */}
			<div className={styles.card}>
				<section className={styles.heading}>
					<h1>Sorting Visualizer</h1>
					{/* <button onClick={props.onClick}>Click to login</button> */}
				</section>
				<section className={styles.login}>
					<h3 className={styles.loginFormHeading}>Login Form</h3>
					<form onSubmit={formSubmitHandler}>
						<div className={styles.formControls}>
							<div className={styles.formControl}>
								<label htmlFor="first-name">First Name</label>
								<input
									type="text"
									id="first-name"
									ref={firstNameRef}
									className={inputFirstNameStyles}
								/>
							</div>
							<div className={styles.formControl}>
								<label htmlFor="last-name">Last Name</label>
								<input
									type="text"
									id="last-name"
									ref={lastNameRef}
									className={inputLastNameStyles}
								/>
							</div>
							<div className={styles.formControl}>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									ref={emailRef}
									className={inputEmailStyles}
								/>
							</div>
							<div className={styles.formControl}>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									ref={passwordRef}
									className={inputPasswordStyles}
								/>
							</div>
						</div>
						{!isFormValid && (
							<div className={styles.error}> Enter correct details.</div>
						)}
						<div className={styles.formSubmit}>
							<button type="submit">Submit</button>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
};

export default FrontPage;
