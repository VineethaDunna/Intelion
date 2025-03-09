import React, { useState } from "react";
import { BsGearFill } from "react-icons/bs"; // Settings icon
import "./consent.css";

const ConsentPreferences = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='consent-container'>
			{/* Floating Button */}
			<button className='consent-btn' onClick={() => setIsOpen(!isOpen)}>
				<BsGearFill size={24} />
			</button>

			{/* Small Card Popup */}
			{isOpen && (
				<div className='modal-overlay'>
					<div className='consent-modal'>
						<h2>Customize Consent Preferences</h2>
						<p>
							We use cookies to help you navigate efficiently and perform
							certain functions. You will find detailed information about all
							cookies under each category below.
						</p>

						<div className='cookie-category'>
							<h3>
								Necessary <span className='active'>Always Active</span>
							</h3>
							<p>
								Necessary cookies enable basic features like secure login and
								adjusting consent preferences. These cookies do not store any
								personal data.
							</p>
						</div>

						<div className='cookie-category'>
							<h3>Functional</h3>
							<p>
								Functional cookies help with social media sharing, feedback
								collection, and other third-party features.
							</p>
						</div>

						<div className='cookie-category'>
							<h3>Analytics</h3>
							<p>
								Analytical cookies help understand how visitors interact with
								the website by tracking metrics like visitor count and bounce
								rate.
							</p>
						</div>

						<div className='cookie-category'>
							<h3>Performance</h3>
							<p>
								Performance cookies track key performance indicators to enhance
								user experience.
							</p>
						</div>

						<div className='cookie-category'>
							<h3>Advertisement</h3>
							<p>
								Advertisement cookies provide targeted ads based on previous
								page visits.
							</p>
						</div>

						<div className='button-group'>
							<button className='reject' onClick={() => setIsOpen(false)}>
								Reject All
							</button>
							<button className='save' onClick={() => setIsOpen(false)}>
								Save My Preferences
							</button>
							<button className='accept' onClick={() => setIsOpen(false)}>
								Accept All
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ConsentPreferences;
