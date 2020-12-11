import React, {useMemo} from "react";

export const ButtonWithMemo: React.FC = () => {
    const text = useMemo(() => ("button text"), ["some key"]);

    return (
        <button>
            {text}
        </button>
    );
}