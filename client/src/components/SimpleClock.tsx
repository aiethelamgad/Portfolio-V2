import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';

interface TimeSegment {
  value: string;
  isUpdating: boolean;
}

interface ClockData {
  hours: TimeSegment;
  minutes: TimeSegment;
  seconds: TimeSegment;
  period: string;
}

const SimpleClock = memo(function SimpleClock() {
  const [clock, setClock] = useState<ClockData | null>(null);
  const [prevTime, setPrevTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Convert to Alexandria time (UTC+2)
      const alexandriaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Cairo' }));

      const hours = String(alexandriaTime.getHours()).padStart(2, '0');
      const minutes = String(alexandriaTime.getMinutes()).padStart(2, '0');
      const seconds = String(alexandriaTime.getSeconds()).padStart(2, '0');
      const period = alexandriaTime.getHours() >= 12 ? 'PM' : 'AM';
      const currentTime = `${hours}:${minutes}:${seconds}`;


      setClock({
        hours: {
          value: hours,
          isUpdating: !!(prevTime && prevTime.substring(0, 2) !== hours),
        },
        minutes: {
          value: minutes,
          isUpdating: !!(prevTime && prevTime.substring(3, 5) !== minutes),
        },
        seconds: {
          value: seconds,
          isUpdating: !!(prevTime && prevTime.substring(6, 8) !== seconds),
        },
        period,
      });

      setPrevTime(currentTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [prevTime]);

  if (!clock) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-3"
    >
      {/* Digital Time Display */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 font-mono">
          {/* Hours */}
          <motion.div
            key={`hours-${clock.hours.value}`}
            initial={clock.hours.isUpdating ? { opacity: 0, y: -8 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {clock.hours.value}
            </span>
          </motion.div>

          {/* Separator */}
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-3xl md:text-4xl font-bold text-accent"
            aria-hidden="true"
          >
            :
          </motion.div>

          {/* Minutes */}
          <motion.div
            key={`minutes-${clock.minutes.value}`}
            initial={clock.minutes.isUpdating ? { opacity: 0, y: -8 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {clock.minutes.value}
            </span>
          </motion.div>

          {/* Seconds */}
          <motion.div
            key={`seconds-${clock.seconds.value}`}
            initial={clock.seconds.isUpdating ? { opacity: 0, scale: 0.8 } : undefined}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-center ml-1"
          >
            <span className="text-xl md:text-2xl font-bold text-muted-foreground">
              {clock.seconds.value}
            </span>
          </motion.div>

          {/* Period */}
          <motion.div className="flex flex-col items-center ml-2">
            <span className="text-sm md:text-base font-semibold text-accent">
              {clock.period}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Location and Timezone Info */}
      <div className="text-xs text-muted-foreground">
        <p>Alexandria, Egypt • UTC+2 (EET)</p>
      </div>
    </motion.div>
  );
});

export default SimpleClock;
