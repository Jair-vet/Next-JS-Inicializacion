
export const DarkLayout = ({ children }) => {
    return (
        <div className="p-8 bg-darkColor rounded-md container">
            <h3>Dark-Layout</h3>
            <div>
                { children }
            </div>
        </div>
    )
}
