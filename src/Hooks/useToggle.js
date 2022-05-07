import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
	const [toggled, setToggled] = useState(initialValue)

	const toggle = useCallback(() => setToggled(state => !state), []);

	return [toggled, toggle]
}

export default useToggle;