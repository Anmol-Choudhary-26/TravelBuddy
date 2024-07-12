import "../styles/resetpassword.css";

function ResetPwd(){

    return(

        <div className="full">

                <div className="reset">
                        <h3>Reset Password</h3>

                        <div className="enternew">
                                <p>New Password</p>
                                <input type="password" name="password"/>
                        </div>

                        <div className="enternew">
                                <p>Confirm Password</p>
                                <input type="password" name="password"/>
                        </div>

                        <div className="enternew">
                            <button className="submit">Reset Password</button>
                        </div>
                </div>
        </div>
    )


}

export default ResetPwd;