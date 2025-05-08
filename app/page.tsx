import * as motion from "motion/react-client"
import "./page.css";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">        
        <motion.div
            className="triangle"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ delay: 0.2, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
            className="triangle2"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ delay: 0.1, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
            className="triangle3"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ delay: 0.3, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
            className="triangle4"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ delay: 1, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
            className="triangle5"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ delay: 1, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
            className="triangle6"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ delay: 1.5, duration: 6, ease: "easeInOut" }}
        />
    </main>
  );
}
