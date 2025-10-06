import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Encurtador de URL
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme URLs longas em links curtos e fáceis de compartilhar. 
              Rápido, confiável e gratuito.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <AppRoutes />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

