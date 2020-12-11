import React from "react";

import {useDeepMemo} from "@apollo/client/react/hooks/utils/useDeepMemo";

export const ButtonWithMemo: React.FC = () => {
    const text = useDeepMemo(() => ("button text"), ["some key"]);

    return (
        <button>
            {text}
        </button>
    );
}