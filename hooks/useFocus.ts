import { useState } from "react";

function useFocus() {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    return { isFocused, onFocus, onBlur };
}

export default useFocus;