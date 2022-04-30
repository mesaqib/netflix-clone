import { PropaneSharp } from '@mui/icons-material';
import React from 'react'

import AddIcon from '@mui/icons-material/Add';

function FaqQuestion(props) {
    return (
        <div>


            <div className="q-1">

                <div className="q">
                    <h1>{props.q}</h1>
                    <AddIcon className="add" />
                </div>
                <div className="a">
                    <div className="text">
                        <h1>
                            {props.a}
                        </h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FaqQuestion;