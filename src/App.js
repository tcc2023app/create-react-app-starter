import './App.css';
import togoicon from './assets/ToGO_icon.png';
import android from './assets/android-logo.svg';

function App() {
  const download = () => {
    const urlDoArquivo = 'https://expo.dev/artifacts/eas/uqogL6zRBXDpJWkF93uBVJ.apk';
    const linkDeDownload = document.createElement('a');
    linkDeDownload.href = urlDoArquivo;
    linkDeDownload.target = '_blank'; // Abrir em uma nova aba
    linkDeDownload.download = 'gogo-application.apk';
    document.body.appendChild(linkDeDownload);
    linkDeDownload.click();
    document.body.removeChild(linkDeDownload);
  };
  return (
    <div className='h-screen w-full bg-gradient-to-r from-[#0075ff] to-[#00ff75]'>
      <div className='h-full flex justify-center items-center flex-col px-10'>
        <img src={togoicon} className='h-32 mb-4' />
        <p className='text-6xl text-center text-white font-mono font-semibold'>
          Bem Vindo ao Gogo!
        </p>
        <p className='text-xl text-center text-white font-mono font-semibold mt-2'>
          Que tal ter uma experiencia nova e conhecer novos lugares?
        </p>
        <hr className='w-1/4 bg-white my-8' />
        <p className='text-xl text-center text-white font-mono font-semibold'>
          Faça o download e viva novas historias
        </p>
        <button
          onClick={() => download()}
          className='bg-white mt-2 p-4 rounded font-semibold flex items-center'>
          <p className=' border-r pr-2 mr-2 border-gray-500'>
            Download
          </p>
          <img src={android} className='h-6' />
        </button>
      </div>
    </div>
  );
}

export default App;
