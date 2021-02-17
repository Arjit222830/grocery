import React from "react";
import TextField from '@material-ui/core/TextField';

const Cage= ()=>{

    return (
        <div>
           <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </div>
    );
}
      
export default Cage;