import React from 'react'

import LanguageIcon from '@mui/icons-material/Language';

function LanguageButton() {
    return (
        <div>
            <div className="lang-button">
                <LanguageIcon className="world" />
                <select name="lang">
                    <option value="English"> English</option>
                    <option value="audi">हिन्दी</option>
                </select>
            </div>
        </div>
    )
}

export default LanguageButton