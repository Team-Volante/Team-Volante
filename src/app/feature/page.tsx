import SplineViewer from '@/components/SplineViewer'
import '@/styles/buggy.css'

export const metadata = {
  title: '3D Buggy Interaction - Team Volante',
  description: 'Interactive 3D model of Team Volante\'s racing buggy'
}

export default function FeaturePage() {
  return (
    <div className="container">
      {/* Title */}
      <h1>Interact with Our <span className="highlight">Buggy</span></h1>

      {/* Canvas-Like Frame for Spline Viewer */}
      <div className="frame">
        <SplineViewer url="https://prod.spline.design/0q5xJrZ72p8LiKEO/scene.splinecode" />
      </div>

      {/* Footer Text */}
      <p className="footer-text">
        To experience the <span className="highlight">real buggy</span>, come to the
        lab!
      </p>
    </div>
  )
}