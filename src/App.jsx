import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Notescontext from './Context/Notescontext';
import DataContext from './Context/DataContext';

function App() {
	return (
		<div className='flex gap-5 '>
			<Sidebar />
			<Notescontext>
				<DataContext>
					<Home />
				</DataContext>
			</Notescontext>
		</div>
	);
}

export default App;