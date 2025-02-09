import React, { useRef, useEffect } from "react"

const GlowingBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGlowingDot = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 5 + 1,
      vx: Math.random() * 5 - 1,
      vy: Math.random() * 5 - 1,
      life: Math.random() * 100 + 100,
    })

    const dots = Array(70).fill().map(createGlowingDot)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot, index) => {
        dot.x += dot.vx
        dot.y += dot.vy
        dot.life--

        if (dot.x < 0 || dot.x > canvas.width || dot.y < 0 || dot.y > canvas.height || dot.life <= 0) {
          dots[index] = createGlowingDot()
        }

        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius)
        gradient.addColorStop(0, `rgba(147, 51, 234, ${dot.life / 100})`)
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)")

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default GlowingBackground

