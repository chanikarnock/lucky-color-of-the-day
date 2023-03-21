const Navbar = () => {
    return (
        <nav className="navbar">            
            <div className="links-link">
                {/* <Link to="/">Home</Link><br />
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"green",
                    borderRadius: "15px"
                }}>Add blog</Link> */}
                <button className="links-link-item">วันนี้</button>
                <button className="links-link-item">วันพรุ่งนี้</button>
                <button className="links-link-item">ระบุวัน</button>
            </div>
        </nav>
    );
}
 
export default Navbar;