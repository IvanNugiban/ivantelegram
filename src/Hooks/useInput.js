import { useState } from 'react'

const UseInput = (initualValue) => {
	const [value, setValue] = useState(initualValue);
	function onChange(e) {
		setValue(e.target.value);
	}
	return { value, onChange, setValue };
}

export default UseInput