import SplineViewer from '@/components/SplineViewer'

export const metadata = {
  title: 'Volante Surprise - Team Volante',
  description: 'Surprise racing game from Team Volante'
}

export default function SurprisePage() {
  return (
    <div id="splineContainer" style={{
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      width: '100%'
    }}>
      <div style={{ textAlign: 'center', position: 'absolute', top: '20px', zIndex: 10 }}>
        <h1 style={{ fontWeight: 800 }}>Surprise!! Complete the Laps!!</h1>
        <h3>SPACE BAR FOR ACCELERATION!!</h3>
      </div>
      <SplineViewer 
        url="https://prod.spline.design/52LwRt7C1MLqWUGL/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  )
}