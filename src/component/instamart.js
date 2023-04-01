import { useState, useContext } from "react"
import userContext from "../utils/userContext"

const Section = ({ title, description, isVisible, setIsVisible }) => {
    const dummy = useContext(userContext)
    return (
        <div className="border-2 border-red-500">
            <h1 className="font-mono font-bold text-orange-500">{title}</h1>
            <div>{dummy.user.name}</div>

            {(isVisible) ? <button className="text-yellow-900 m-2" onClick={() => setIsVisible(false)} >hide</button> : <button className="text-yellow-900" onClick={() => setIsVisible(true)} >show</button>}
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [config, setConfig] = useState(
        {
            showabout: false,
            showcareer: false,
            showateam: false,

        }
    );
    return (
        <h1 >
            <h1 className="font-black m-4 capitalize">instamart</h1>
            <Section title={"about instamart"} description={"this is paragraph of about section bro!!!! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section The standard chunk of Lorem Ipsum used since t is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."} isVisible={config.showabout} setIsVisible={() => setConfig({
                showabout: true,
                showcareer: false,
                showateam: false,

            })}
            />

            <Section title={"team instamart"} description={"this is paragraph of team section bro!!!!  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section The standard chunk of Lorem Ipsum used since t is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."} isVisible={config.showateam} setIsVisible={() => setConfig({
                showabout: false,
                showcareer: false,
                showateam: true,

            })} />

            <Section title={"career section"} description={"this is paragraph of team section bro!!!!  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section The standard chunk of Lorem Ipsum used since t is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."} isVisible={config.showcareer} setIsVisible={() => setConfig({
                showabout: false,
                showcareer: true,
                showateam: false,

            })} />

        </h1>
    )
}
export default Instamart;