import { useState } from 'react'

const UseInput = (initualValue) => {
	const [value, setValue] = useState(initualValue);
	function onChange(e) {
		setValue(e.target.value);
	}
	function clear() {
		setValue('')
	}
	return { bind: { value, onChange }, clear };
}

export default UseInput