import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, Sparkles, Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    filter: "blur(10px)",
    transition: { duration: 0.6, ease: "easeIn" }
  }
};

export default function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const reset = () => setStep(0);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0A0A0A] text-white flex items-center justify-center font-serif tracking-wide select-none">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[#0A0A0A] pointer-events-none" />

      <AnimatePresence mode="wait">
        {step === 0 && <Screen1 key="s1" onNext={nextStep} />}
        {step === 1 && <Screen2 key="s2" onNext={nextStep} />}
        {step === 2 && <Screen3 key="s3" onNext={nextStep} />}
        {step === 3 && <Screen4 key="s4" onNext={nextStep} />}
        {step === 4 && <Screen5 key="s5" onReset={reset} />}
      </AnimatePresence>
    </div>
  );
}

function Screen1({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      variants={containerVariants} initial="hidden" animate="visible" exit="exit"
      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 w-full h-full"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1600&auto=format&fit=crop" 
          alt="Театральный занавес / Ксения" 
          className="w-full h-full object-cover opacity-[0.03] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
      </div>
      
      <div className="z-10 max-w-3xl flex flex-col items-center gap-6 px-4">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-sans font-semibold mb-2"
        >
          Премьера сезона
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}
          className="text-6xl md:text-8xl font-light tracking-tight leading-none italic uppercase"
        >
          Ксения.<br/>
          <span className="text-xl md:text-2xl font-serif not-italic font-normal opacity-50 mt-6 block text-center lowercase tracking-widest text-sm">Театр, в котором<br/> главная роль принадлежит ей.</span>
        </motion.h1>

        <motion.button 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          onClick={onNext}
          className="mt-12 flex items-center gap-3 px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-sans font-bold hover:bg-opacity-90 transition-all rounded-none"
        >
          Войти в зрительный зал <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function Screen2({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      variants={containerVariants} initial="hidden" animate="visible" exit="exit"
      className="absolute inset-0 flex items-center justify-center p-6"
    >
      <div className="max-w-xl w-full relative">
        <div className="relative bg-[#0A0A0A] border border-white/20 p-10 md:p-14 flex flex-col gap-6 rounded-none">
          <div className="text-left border-b border-white/20 pb-6 mb-2">
            <span className="text-[10px] tracking-widest uppercase opacity-40 font-sans mb-2 block">Акт первый</span>
            <h2 className="text-2xl md:text-3xl italic">Тайна имени: Чужестранка</h2>
          </div>

          <div className="space-y-6 text-[13px] md:text-sm leading-relaxed opacity-80 font-sans text-left">
            <p>
              Древние греки знали, что имя <span className="italic font-bold font-serif text-lg">Ксения</span> — особенное. Оно соткано из двух противоположностей:
            </p>
            <div className="space-y-4 px-4 md:px-8 py-2 border-l border-white/10">
              <p>
                <span className="italic font-bold font-serif text-lg text-white">Xenia</span> — гостеприимство, радушие и тепло, которое притягивает людей.
              </p>
              <p>
                <span className="italic font-bold font-serif text-lg text-white">Xenios</span> — странница, особенная душа, которая видит этот мир глубже.
              </p>
            </div>
            
            <p className="pt-6 border-t border-white/5 text-balance">
              Наша Ксюша объединила в себе оба этих дара: она — удивительная <span className="italic font-bold font-serif text-lg text-white">Чужестранка</span>, создающая абсолютный уют.
            </p>
          </div>

          <button onClick={onNext} className="mt-8 ml-auto p-4 border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer rounded-none">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Screen3({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      variants={containerVariants} initial="hidden" animate="visible" exit="exit"
      className="absolute inset-0 flex flex-col items-center justify-center p-6 w-full"
    >
      <div className="max-w-3xl w-full flex flex-col items-center gap-8 text-left items-start md:items-start relative border md:border-white/20 p-6 md:p-12">
        <div className="w-full">
          <span className="text-[10px] tracking-widest uppercase opacity-40 font-sans mb-1 block">Акт второй</span>
          <h2 className="text-2xl md:text-3xl mb-4 italic">Детская мечта</h2>
        </div>

        <div className="w-full aspect-[16/10] md:aspect-[21/9] bg-[#151515] border border-white/10 rounded-none relative group overflow-hidden flex items-center justify-center p-8 text-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] opacity-20 grayscale border-none" alt="Cinematic background" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
          </div>

          <div className="z-10 flex flex-col items-center max-w-lg">
            <Sparkles className="w-5 h-5 opacity-40 mb-6" />
            <p className="opacity-90 italic text-lg md:text-xl font-light leading-relaxed text-balance">
              «Магия сцены уже внутри тебя, и каждый день — это твоя личная великолепная премьера.»
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full mt-2 items-end justify-between">
          <p className="text-[12px] md:text-[13px] leading-relaxed opacity-80 text-left font-sans flex-1">
            Судьба могла сложиться иначе, а институт — остаться лишь невыбранным перекрестком. Но настоящая актриса играет не на дипломах, она играет сердцем. Главное — продолжать сиять и собирать аплодисменты самой жизни.
          </p>
          <button onClick={onNext} className="mt-4 md:mt-0 p-4 border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer rounded-none ml-auto">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Screen4({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      variants={containerVariants} initial="hidden" animate="visible" exit="exit"
      className="absolute inset-0 flex items-center justify-center p-6 w-full max-h-screen overflow-y-auto"
    >
       <div className="max-w-4xl w-full flex flex-col lg:flex-row gap-12 items-center justify-center py-12 p-6 md:p-12 border border-transparent md:border-white/10">
          
          <div className="w-full lg:w-5/12 relative">
            <div className="grid grid-cols-2 gap-2 relative h-[60vh] lg:h-96">
               <img src="https://images.unsplash.com/photo-1507676184212-d03305a527e4?q=80&w=800" className="w-full h-full object-cover rounded-none bg-white/5 border border-white/5 grayscale hover:grayscale-0 relative z-10 transition-all duration-700" alt="Эстетика" />
               <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800" className="w-full h-full object-cover rounded-none bg-white/10 border border-white/5 grayscale hover:grayscale-0 relative z-10 opacity-80 mt-12 transition-all duration-700" alt="Искусство" />
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col justify-center text-left gap-6 lg:pl-8">
            <div className="border-b border-white/20 pb-4">
              <span className="text-[10px] tracking-widest uppercase opacity-40 font-sans mb-1 block">Акт третий</span>
              <h2 className="text-2xl md:text-3xl italic">Эстетика</h2>
            </div>
            
            <p className="text-[13px] mb-2 leading-relaxed opacity-80 font-sans">
              В этот день мы хотим напомнить тебе о твоем главном таланте, который не требует сцены.
            </p>
            <p className="italic text-lg md:text-xl leading-relaxed py-2">
              Дорогая Ксюша, с Днем рождения! 🌿<br/>
              Твой супердар — менять пространство вокруг себя.
            </p>
            <p className="text-[12px] leading-relaxed opacity-60 font-sans pt-4 border-t border-white/10">
              Продолжай делать красивым абсолютно всё, к чему ты прикасаешься: своими руками, своим чутким взглядом и своими светлыми мыслями. Мир становится лучше, когда ты на него смотришь.
            </p>

            <button onClick={onNext} className="mt-8 ml-auto w-12 h-12 flex items-center justify-center border border-white/20 bg-transparent hover:bg-white hover:text-black transition-all rounded-none group opacity-80 hover:opacity-100">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

       </div>
    </motion.div>
  );
}

function Screen5({ onReset }: { onReset: () => void }) {
  return (
    <motion.div 
      variants={containerVariants} initial="hidden" animate="visible" exit="exit"
      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center w-full min-h-screen"
    >
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1514302240736-b1fee59bea09?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover opacity-5 grayscale" alt="Spotlights" />
         <div className="absolute inset-0 bg-[#0A0A0A]/80 mix-blend-multiply pointer-events-none" />
      </div>
      
      <div className="z-10 max-w-3xl flex flex-col items-center gap-8 w-full border border-white/10 p-12 md:p-20 bg-[#0A0A0A]/90 backdrop-blur-sm">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight italic text-balance mb-4 text-center">
          Сцена открыта.<br/> Режиссерский пульт в твоих руках. 
        </h1>

        <div className="w-full border-t border-white/20 pt-8 mt-4">
          <p className="text-[13px] md:text-sm leading-relaxed opacity-80 font-sans text-balance text-center mx-auto max-w-md">
            Желаем тебе бесконечного вдохновения, смелых путешествий (ведь <span className="italic font-serif text-lg border-b border-white/20 px-1">Чужестранкам</span> открыты все дороги!) и любви. 
          </p>
        </div>

        <div className="mt-8 text-center flex flex-col items-center">
          <div className="text-3xl italic mb-2">Браво, Ксюша!</div>
          <div className="flex justify-center gap-2 opacity-60 text-sm">
            <span>🌸</span><span>🌸</span><span>🌸</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-white mt-8 opacity-80">
            С Днем Рождения 🌿
          </p>
        </div>

        <button 
          onClick={onReset}
          className="mt-12 text-[10px] text-white uppercase tracking-[0.3em] opacity-40 hover:opacity-100 font-sans transition-all flex items-center gap-2 rounded-none p-4 border border-transparent hover:border-white/20 cursor-pointer"
        >
          Запустить премьеру еще раз
        </button>
      </div>
    </motion.div>
  );
}
