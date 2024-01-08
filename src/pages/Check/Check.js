import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './chek.scss';
const Check = () => {
	const pasRef = useRef();
	const navigate = useNavigate();

	const SubmitFunc = (evt) => {
		evt.preventDefault();
		if (pasRef.current?.value.toLowerCase() === 'oybek') {
			localStorage.setItem('checkToken', 'token bor deb tassavur qilamiz');
			navigate('/');
		} else {
			alert('Parol hato kiritildi iltimos qaytadan uring');
		}
	};
	return (
		<div className='check_box'>
			<form onSubmit={SubmitFunc}>
            <h3> Login</h3>
				<input
					type='text'
					ref={pasRef}
					placeholder='Iltimos parolni kiriting'
				/>
				<button>Yuborish</button>
			</form>
		</div>
	);
};

export default Check;
