import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Notescontext from './Context/Notescontext';
import Datacontext from './Context/Datacontext';

function App() {
	return (
		<div className='flex gap-5 '>
			<Sidebar />
			<Notescontext>
				<Datacontext>
					<Home />
				</Datacontext>
			</Notescontext>
		</div>
	);
}

export default App;