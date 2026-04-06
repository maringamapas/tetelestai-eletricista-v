"use client"
import Image from "next/image"
import FooterCTA from "@/components/footer-cta"
import { motion } from "framer-motion"
import { dadosCliente } from "@/data/cliente"
import {
  Bug,
  ShieldAlert,
  Hammer,
  ShieldCheck,
  MessageCircle,
  Phone,
  Worm,
  BugOff,
  Rat,
  type LucideIcon,
} from "lucide-react"

const iconeMap: Record<string, LucideIcon> = {
  Bug,
  ShieldAlert,
  Hammer,
  ShieldCheck,
  MessageCircle,
  Phone,
  Worm,
  BugOff,
  Rat,
}

const Page = () => {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500 bg-clip-text text-transparent">
                    {dadosCliente.conteudo.tituloPrincipal}
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                  {dadosCliente.conteudo.subtitulo}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {dadosCliente.recursos.map((recurso, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/30 border border-emerald-500/60 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm sm:text-base">{recurso.titulo}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm">{recurso.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full pt-4 sm:pt-6">
                <motion.a
                  href={dadosCliente.contato.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(16, 185, 129, 0.5)" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.7)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base rounded-full shadow-lg transition-colors duration-300"
                >
                  <MessageCircle className="h-5 w-5" stroke="currentColor" fill="none" />
                  Solicitar Orçamento
                </motion.a>

                <motion.a
                  href={dadosCliente.contato.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(16, 185, 129, 0.5)" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.7)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-zinc-700 bg-zinc-900/50 hover:bg-emerald-500 hover:text-white text-white font-extrabold rounded-full backdrop-blur-sm transition-colors duration-300 text-center text-2xl"
                >
                  {dadosCliente.contato.telefone}
                </motion.a>
              </div>
            </div>

            {/* Right Column - Cards Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {dadosCliente.servicos.map((servico) => (
                <motion.div
                  key={servico.id}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }
                    },
                  }}
              whileHover={{ 
                scale: 1.03, 
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.25)",
                borderColor: "rgba(16, 185, 129, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative group overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 to-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 cursor-pointer touch-manipulation"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 transition-opacity duration-300 group-hover:opacity-150" />
                  {servico.destaque && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-emerald-300 font-medium">Popular</span>
                      </div>
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="mb-3 sm:mb-4 transition-transform duration-200 group-hover:scale-110">
                      {(() => {
                        if (servico.icone.includes('<svg')) {
                          return (
                            <div 
                              className="h-9 w-9 sm:h-10 sm:w-10 inline-flex items-center justify-center"
                              style={{ color: "var(--primaryColor, #10b981)" }}
                              dangerouslySetInnerHTML={{ __html: servico.icone }} 
                            />
                          )
                        }
                        const Icone = iconeMap[servico.icone]
                        return Icone ? (
                          <Icone className="h-9 w-9 sm:h-10 sm:w-10" stroke="currentColor" fill="none" style={{ color: "var(--primaryColor, #10b981)" }} />
                        ) : null
                      })()}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{servico.titulo}</h3>
                    <p className="text-sm sm:text-base text-zinc-300">{servico.descricao}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-balance">
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500 bg-clip-text text-transparent">
              Avaliações de Clientes
            </span>
          </h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {dadosCliente.depoimentos?.map((depoimento) => (
              <motion.div
                key={depoimento.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }
                  },
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -4,
                  boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.25)",
                  borderColor: "rgba(16, 185, 129, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="relative group overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 to-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 cursor-pointer touch-manipulation"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 transition-opacity duration-300 group-hover:opacity-150" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={depoimento.imagem}
                      alt={depoimento.nome}
                      width={56}
                      height={56}
                      className="rounded-full w-14 h-14 object-cover border-2 border-emerald-500/50"
                    />
                    <div>
                      <h4 className="font-semibold text-white text-base">{depoimento.nome}</h4>
                      <p className="text-sm text-zinc-400">{depoimento.profissao}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-emerald-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    &quot;{depoimento.texto}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FooterCTA Section */}
        <FooterCTA />

        {/* Footer with divider and credit text */}
        <footer className="border-t border-zinc-700/50 mt-12 sm:mt-16 py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <p className="text-sm sm:text-base text-zinc-400">
              Criado por{" "}
              <motion.a
                href="https://webstudiomga.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, color: "#fbbf24" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300"
              >
                Webstudio
              </motion.a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default Page
