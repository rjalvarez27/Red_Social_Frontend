import { useNavigate } from 'react-router-dom';
export function Settings({onSettings}){
	const navigate = useNavigate();
        const handleSettings = () => {
          onSettings()
      }
        return (
          <div className="w-[100%] h-[100%] bg-[rgb(18,16,25)] z-20 fixed right-0 top-0">
            <div>
              <button className="messages-button" onClick={handleSettings}>settings</button>
            </div>
            
			<ul className="menu ">
				<li><div className="decoracion -white"></div><a onClick={() => navigate("/perfiluser")} >Usuario</a></li>
				<li><div className="decoracion -white"></div><a onClick={() => navigate("/rates")} >Publicidad</a></li>
        	</ul>
          
          </div>
        );
}