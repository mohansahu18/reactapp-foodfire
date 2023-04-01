import React from "react";
class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: "",
            }
        }
        console.log("child- constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mohansahu18")
        const json = await data.json()
        console.log(json);
        this.setState(
            {
                userInfo: json
            }
        )
        console.log("child- componebtDidMounts");
    }

    componentDidUpdate() {
        console.log("child- componebtDidUpdate");
    }

    componentWillUnmount() {
        console.log("child- componebtDidUnmount")
    }

    render() {
        return (
            <>
                {/* {console.log("child- render")} */}

                <h1>profile class component</h1>
                <img src={"https://avatars.githubusercontent.com/u/123477420?v=4"} alt="avatar" />
                <h2>name: {this?.state?.userInfo?.name}</h2>
                <h3>location: {this?.state?.userInfo?.location}</h3>

                {console.log("child- render")}
            </>
        )
    }
}
export default ProfileClass;