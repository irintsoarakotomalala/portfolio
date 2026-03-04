import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, ChevronLeft, ChevronRight, ArrowUpRight, Images } from "lucide-react";
// VPI site vitrine
import vpiBg from "../assets/VPI site vitrine/bg.png";
import vpiBgMobile from "../assets/VPI site vitrine/bg_mobile.png";
import vpi1 from "../assets/VPI site vitrine/1.png";
import vpi2 from "../assets/VPI site vitrine/2.png";
import vpi3 from "../assets/VPI site vitrine/3.png";
import vpi4 from "../assets/VPI site vitrine/4.png";
// MADAVISION
import madaBg from "../assets/MADAVISION/bg.png";
import madaBgMobile from "../assets/MADAVISION/bg_mobile.png";
import mada1 from "../assets/MADAVISION/1.png";
import mada2 from "../assets/MADAVISION/2.png";
import mada3 from "../assets/MADAVISION/3.png";
import mada4 from "../assets/MADAVISION/4.png";
import mada5 from "../assets/MADAVISION/5.png";
import mada6 from "../assets/MADAVISION/6.png";
import mada7 from "../assets/MADAVISION/7.png";
import mada8 from "../assets/MADAVISION/8.png";
import mada9 from "../assets/MADAVISION/9.png";
// ITM
import itmBg from "../assets/ITM/bg.png";
import itmBgMobile from "../assets/ITM/bg_mobile.png";
import itm1 from "../assets/ITM/1.png";
import itm2 from "../assets/ITM/2.png";
import itm3 from "../assets/ITM/3.png";
import itm4 from "../assets/ITM/4.png";
import itm5 from "../assets/ITM/5.png";
import itm6 from "../assets/ITM/6.png";
import itm7 from "../assets/ITM/7.png";
import itm8 from "../assets/ITM/8.png";
import itm9 from "../assets/ITM/9.png";
// Madagascart
import madagascartBg from "../assets/madagascart/bg.png";
import madagascartBgMobile from "../assets/madagascart/bg_mobile.png";
import madagascart1 from "../assets/madagascart/1.png";
import madagascart2 from "../assets/madagascart/2.png";
import madagascart3 from "../assets/madagascart/3.png";
// VPI app mobile
import vpiAppBg from "../assets/VPI app/bg.png";
import vpiAppBgMobile from "../assets/VPI app/bg_mobile.jpg";
import vpiApp1 from "../assets/VPI app/1.png";
import vpiApp2 from "../assets/VPI app/2.png";
import vpiApp3 from "../assets/VPI app/3.png";
import vpiApp4 from "../assets/VPI app/4.png";
import vpiApp5 from "../assets/VPI app/5.png";
import vpiApp6 from "../assets/VPI app/6.png";
// B2B
import b2bBg from "../assets/B2B/bg.png";
import b2bBgMobile from "../assets/B2B/bg_mobile.png";
import b2b1 from "../assets/B2B/1.png";
import b2b2 from "../assets/B2B/2.png";
import b2b3 from "../assets/B2B/3.png";
import b2b4 from "../assets/B2B/4.png";
import b2b5 from "../assets/B2B/5.png";
import b2b6 from "../assets/B2B/6.png";
import b2b7 from "../assets/B2B/7.png";

const COLOR = "#FFFFFF";
const DISC_R = 110;
const DISC_SIZE = DISC_R * 2 + 120;
const DISC_R_MOBILE = 75;
const DISC_SIZE_MOBILE = DISC_R_MOBILE * 2 + 90;

const allProjects = [
	{
		title: "Vanilla Pay International",
		shortTitle: "VPI",
		description: "Rebranding complet de la societe incluant la refonte du logo, charte graphique et developpement du site web vitrine moderne et responsive.",
		tags: ["HTML", "CSS", "Design", "Branding"],
		image: vpiBg,
		imageMobile: vpiBgMobile,
		images: [vpi1, vpi2, vpi3, vpi4],
		github: null, live: "https://vanilla-pay.net", liveLabel: "Voir le site", year: "2025",
	},
	{
		title: "MADAVISION",
		shortTitle: "MDV",
		description: "Site front office complet pour l'inscription et reservation de stands d'exposition avec systeme de facturation proforma automatise.",
		tags: ["React", "Node.js", "PostgreSQL", "PDF"],
		image: madaBg,
		imageMobile: madaBgMobile,
		images: [mada1, mada2, mada3, mada4, mada5, mada6, mada7, mada8, mada9],
		github: null, live: "https://mada-vision.com", liveLabel: "Voir le site", year: "2025",
	},
	{
		title: "ONTM - ITM & IHM",
		shortTitle: "ONTM",
		description: "Solution digitale pour l'Office National du Tourisme avec plan interactif des stands et reservation en temps reel.",
		tags: ["React", "Maps", "Node.js", "API"],
		image: itmBg,
		imageMobile: itmBgMobile,
		images: [itm1, itm2, itm3, itm4, itm5, itm6, itm7, itm8, itm9],
		github: null, live: "https://inscription.itm-madagascar-tourisme.com", liveLabel: "Voir le site", year: "2026",
	},
	{
		title: "Madagasc'art",
		shortTitle: "M/ART",
		description: "Plateforme elegante presentant les marques et produits artisanaux malgaches, specialisee dans les sacs en raphia.",
		tags: ["Next.js", "E-commerce", "Design"],
		image: madagascartBg,
		imageMobile: madagascartBgMobile,
		images: [madagascart1, madagascart2, madagascart3],
		github: null, live: "https://madagascart.vercel.app", liveLabel: "Voir le site", year: "2024",
	},
	{
		title: "Vanilla Pay Mobile",
		shortTitle: "VPM",
		description: "Application mobile innovante facilitant les paiements pour les touristes etrangers avec conversion automatique de devises.",
		tags: ["React Native", "Fintech", "Mobile"],
		image: vpiAppBg,
		imageMobile: vpiAppBgMobile,
		images: [vpiApp1, vpiApp2, vpiApp3, vpiApp4, vpiApp5, vpiApp6],
		github: null, live: null, liveLabel: null, year: "2024",
	},
	{
		title: "B2B Networking Salons",
		shortTitle: "B2B",
		description: "Plateforme collaborative pour les exposants avec systeme de rendez-vous temps reel et messagerie integree.",
		tags: ["React", "WebSocket", "B2B"],
		image: b2bBg,
		imageMobile: b2bBgMobile,
		images: [b2b1, b2b2, b2b3, b2b4, b2b5, b2b6, b2b7],
		github: null, live: null, liveLabel: null, year: "2024",
	},
];

const N = allProjects.length;

const Projects = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [rotation, setRotation] = useState(0);
	const [galleryProject, setGalleryProject] = useState<
		typeof allProjects[0] | null
	>(null);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const [hovered, setHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [zoom, setZoom] = useState(1);
	const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
	const isPanning = useRef(false);
	const panStart = useRef({ x: 0, y: 0 });
	const touchStartX = useRef<number>(0);
	const cardRef = useRef<HTMLDivElement>(null);

	// Détection mobile
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 700);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	const discSize = isMobile ? DISC_SIZE_MOBILE : DISC_SIZE;
	const discR = isMobile ? DISC_R_MOBILE : DISC_R;

	const closeGallery = () => {
		setGalleryProject(null);
		setZoom(1);
		setPanOffset({ x: 0, y: 0 });
	};
	const changeGalleryIndex = (idx: number) => {
		setGalleryIndex(idx);
		setZoom(1);
		setPanOffset({ x: 0, y: 0 });
	};

	useEffect(() => {
		if (galleryProject) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [galleryProject]);

	// Zoom molette dans la galerie
	const handleGalleryWheel = (e: React.WheelEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setZoom((prev) => Math.min(4, Math.max(1, prev - e.deltaY * 0.002)));
		if (zoom <= 1) setPanOffset({ x: 0, y: 0 });
	};

	// Pan (déplacer) l'image zoomée
	const handleMouseDown = (e: React.MouseEvent) => {
		if (zoom <= 1) return;
		isPanning.current = true;
		panStart.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
	};
	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isPanning.current) return;
		setPanOffset({
			x: e.clientX - panStart.current.x,
			y: e.clientY - panStart.current.y,
		});
	};
	const handleMouseUp = () => {
		isPanning.current = false;
	};

	const goTo = (index: number) => {
		if (index === activeIndex) return;
		const rawDiff = index - activeIndex;
		let diff = rawDiff;
		if (Math.abs(rawDiff) > N / 2) diff = rawDiff > 0 ? rawDiff - N : rawDiff + N;
		setActiveIndex(index);
		setRotation((prev) => prev - (360 / N) * diff);
	};
	const prev = () => goTo((activeIndex - 1 + N) % N);
	const next = () => goTo((activeIndex + 1) % N);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (galleryProject) {
				if (e.key === "ArrowLeft")
					changeGalleryIndex(
						(galleryIndex - 1 + galleryProject.images.length) %
							galleryProject.images.length
					);
				if (e.key === "ArrowRight")
					changeGalleryIndex(
						(galleryIndex + 1) % galleryProject.images.length
					);
				if (e.key === "Escape") closeGallery();
				return;
			}
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [activeIndex, galleryProject, galleryIndex]); // eslint-disable-line

	// Hover précis via window mousemove (desktop uniquement)
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const card = cardRef.current;
			if (!card) return;
			const rect = card.getBoundingClientRect();
			const mx = e.clientX;
			const my = e.clientY;
			const inCard = mx >= rect.left && mx <= rect.right && my >= rect.top && my <= rect.bottom;
			if (!inCard) { setHovered(false); return; }
			const cx = rect.left + rect.width / 2;
			const cy = rect.bottom;
			const dx = mx - cx;
			const dy = my - cy;
			const dist = Math.sqrt(dx * dx + dy * dy);
			const currentDiscSize = window.innerWidth < 700 ? DISC_SIZE_MOBILE : DISC_SIZE;
			setHovered(dist >= currentDiscSize / 2);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const project = allProjects[activeIndex];
	const bgImage = isMobile && project.imageMobile ? project.imageMobile : project.image;

	return (
		<section
			id="projects"
			className="section-padding overflow-visible"
			style={{ paddingBottom: `calc(1rem + ${discSize / 2}px)` }}
		>
			<div className="max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-10"
				>
					<p className="section-subtitle">03. Projets</p>
					<h2 className="section-title">Ce que j'ai construit</h2>
				</motion.div>

				{/* Compteur + barre de progression */}
				<div className="flex items-end justify-between mb-4 gap-4">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeIndex + "-counter"}
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 8 }}
							transition={{ duration: 0.3 }}
							className="flex items-baseline gap-2 md:gap-3"
						>
							<span
								className="text-3xl md:text-5xl font-bold font-mono leading-none"
								style={{ color: COLOR }}
							>
								{String(activeIndex + 1).padStart(2, "0")}
							</span>
							<span className="text-base md:text-lg font-mono text-white/25">
								/ {String(N).padStart(2, "0")}
							</span>
							<span className="text-xs md:text-sm font-mono text-white/40 ml-1 tracking-widest">
								{project.shortTitle}
							</span>
						</motion.div>
					</AnimatePresence>
					<div className="flex items-center gap-1.5 mb-1">
						{allProjects.map((_, i) => (
							<motion.button
								key={i}
								onClick={() => goTo(i)}
								className="rounded-full transition-all duration-300"
								style={{
									height: 4,
									width: i === activeIndex ? 28 : 8,
									background: i === activeIndex ? COLOR : `${COLOR}30`,
								}}
							/>
						))}
					</div>
				</div>

				{/* Layout mobile : boutons AU-DESSUS/EN-DESSOUS, layout desktop : boutons sur les côtés */}
				<div className={`flex items-center gap-3 w-full ${isMobile ? "flex-col" : "flex-row justify-center"}`}>
					{/* Boutons mobile : rangée horizontale au-dessus */}
					{isMobile && (
						<div className="flex w-full justify-between px-2">
							<button
								onClick={prev}
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/60 hover:bg-white hover:text-black transition-all text-sm font-mono"
							>
								<ChevronLeft size={16} /> Préc.
							</button>
							<button
								onClick={next}
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/60 hover:bg-white hover:text-black transition-all text-sm font-mono"
							>
								Suiv. <ChevronRight size={16} />
							</button>
						</div>
					)}

					{/* Bouton précédent desktop */}
					{!isMobile && (
						<button
							onClick={prev}
							className="flex flex-shrink-0 flex-col items-center gap-1 group"
						>
							<div className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110">
								<ChevronLeft size={20} />
							</div>
							<span className="text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
								{String(((activeIndex - 1 + N) % N) + 1).padStart(2, "0")}
							</span>
						</button>
					)}

					{/* Carte principale */}
					<div
						ref={cardRef}
						className="relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-black"
						style={
							isMobile
								? {
										width: "min(calc(100vw - 48px), 400px)",
										height: "clamp(500px, 160vw, 720px)",
										flexShrink: 0,
										alignSelf: "center",
									}
								: {
										height: "clamp(420px, 75vh, 700px)",
										width: "clamp(420px, 80vw, 950px)",
										flexShrink: 0,
									}
						}
						onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
						onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - touchStartX.current; if (dx < -50) next(); else if (dx > 50) prev(); }}
					>
						{/* Image bg */}
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex + "-" + String(isMobile)}
								initial={{ opacity: 0, scale: 1.06 }}
								animate={{ opacity: 1, scale: hovered ? 1.04 : 1 }}
								exit={{ opacity: 0, scale: 1.02 }}
								transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
								className="absolute inset-0 w-full h-full"
							>
								<img
									src={bgImage}
									alt={project.title}
									className="absolute inset-0 w-full h-full object-cover object-center"
								/>
								<div
									className="absolute inset-0"
									style={{
										background:
											"linear-gradient(to top, rgba(8,12,24,0.5) 0%, transparent 40%)",
									}}
								/>
								<div
									className="absolute inset-0"
									style={{
										background:
											"linear-gradient(to bottom, rgba(8,12,24,0.2) 0%, transparent 20%)",
									}}
								/>
							</motion.div>
						</AnimatePresence>

						{/* Tags */}
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex + "-tags"}
								className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-20"
								initial={{ opacity: 0, y: -6 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
							>
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="px-2 py-0.5 text-[10px] md:text-xs font-mono rounded-full backdrop-blur-md border"
										style={{
											background: "rgba(8,12,24,0.65)",
											borderColor: `${COLOR}50`,
											color: COLOR,
										}}
									>
										{tag}
									</span>
								))}
							</motion.div>
						</AnimatePresence>

						{/* Overlay hover (desktop) */}
						<motion.div
							className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6 md:px-10 text-center"
							style={{
								background: "rgba(8,12,24,0.78)",
								backdropFilter: "blur(2px)",
								WebkitBackdropFilter: "blur(2px)",
								pointerEvents: hovered ? "auto" : "none",
								paddingBottom: `${discSize / 2 + 16}px`,
							}}
							initial={false}
							animate={{ opacity: hovered ? 1 : 0 }}
							transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						>
							<motion.div
								className="flex flex-col items-center gap-3 max-w-lg w-full"
								initial={false}
								animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
								transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
							>
								<h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
									{project.title}
								</h3>
								<p className="text-xs md:text-sm text-white/70 leading-relaxed">
									{project.description}
								</p>
								<div className="flex items-center justify-center gap-2 flex-wrap mt-1">
									{project.live && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105"
											style={{ background: COLOR, color: "#080c18" }}
										>
											<ArrowUpRight
												size={13}
												className="group-hover:rotate-45 transition-transform"
											/>
											{project.liveLabel ?? "Voir le site"}
										</a>
									)}
									{project.github && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all"
										>
											<Github size={13} /> GitHub
										</a>
									)}
									{!project.live && !project.github && (
										<span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border border-white/10 text-white/30">
											Application mobile — non disponible publiquement
										</span>
									)}
									{project.images.length > 1 && (
										<button
											onClick={() => {
												setGalleryProject(project);
												setGalleryIndex(0);
											}}
											className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all hover:scale-105"
											style={{
												background: `${COLOR}18`,
												borderColor: `${COLOR}90`,
												color: COLOR,
											}}
										>
											<Images
												size={13}
												className="group-hover:scale-110 transition-transform"
											/>
											{project.images.length} captures
										</button>
									)}
								</div>
							</motion.div>
						</motion.div>

						{/* Titre discret (quand pas hover) */}
						<motion.div
							className="absolute bottom-6 left-0 right-0 z-40 flex items-center justify-center pointer-events-none"
							animate={{ opacity: hovered ? 0 : 1, y: hovered ? 6 : 0 }}
							transition={{ duration: 0.25 }}
						>
							<h3 className="text-base md:text-xl font-bold text-white/80 leading-tight drop-shadow-lg px-4 text-center">
								{project.title}
							</h3>
						</motion.div>

						{/* Barre de progression bas */}
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 z-20">
							<motion.div
								className="h-full"
								style={{ background: COLOR }}
								animate={{ width: `${((activeIndex + 1) / N) * 100}%` }}
								transition={{ duration: 0.5 }}
							/>
						</div>

						{/* Disque */}
						<div
							className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-50"
							style={{ width: discSize, height: discSize }}
							onMouseEnter={(e) => {
								e.stopPropagation();
								setHovered(false);
							}}
							onMouseLeave={(e) => {
								e.stopPropagation();
							}}
						>
							<div
								className="absolute inset-4 rounded-full"
								style={{
									background: "rgba(8,12,24,0.75)",
									backdropFilter: "blur(20px)",
									WebkitBackdropFilter: "blur(20px)",
									boxShadow: `0 0 40px rgba(8,12,24,0.8), inset 0 0 30px rgba(8,12,24,0.5)`,
								}}
							/>
							<div
								className="absolute inset-0 rounded-full border"
								style={{
									borderColor: `${COLOR}70`,
									boxShadow: `0 0 15px ${COLOR}25, inset 0 0 15px ${COLOR}10`,
								}}
							/>
							<div
								className="absolute rounded-full border"
								style={{
									inset: isMobile ? 8 : 14,
									borderColor: `${COLOR}35`,
								}}
							/>
							<motion.div
								className="absolute rounded-full border"
								style={{
									inset: isMobile ? 16 : 28,
									borderColor: `${COLOR}55`,
								}}
								animate={{
									opacity: [0.4, 1, 0.4],
									scale: [0.98, 1.01, 0.98],
								}}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<motion.div
								className="absolute inset-0"
								animate={{ rotate: rotation }}
								transition={{ type: "spring", stiffness: 55, damping: 18 }}
							>
								{allProjects.map((p, i) => {
									const rad = ((360 / N) * i - 90) * (Math.PI / 180);
									const cx = 50 + (discR / discSize) * 100 * Math.cos(rad);
									const cy = 50 + (discR / discSize) * 100 * Math.sin(rad);
									const isActive = i === activeIndex;
									const tw = isMobile ? (isActive ? 38 : 26) : (isActive ? 66 : 46);
									const th = isMobile ? (isActive ? 28 : 19) : (isActive ? 48 : 34);
									return (
										<button
											key={p.title}
											onClick={() => goTo(i)}
											className="absolute -translate-x-1/2 -translate-y-1/2 group"
											style={{ left: `${cx}%`, top: `${cy}%` }}
										>
											<motion.div
												animate={{ rotate: -rotation }}
												transition={{ type: "spring", stiffness: 55, damping: 18 }}
											>
												{isActive ? (
													<div
														className="relative rounded-xl overflow-hidden"
														style={{
															width: tw,
															height: th,
															boxShadow: `0 0 0 2px ${COLOR}, 0 0 24px ${COLOR}90`,
														}}
													>
														<img
															src={p.image}
															alt={p.title}
															className="w-full h-full object-cover"
														/>
													</div>
												) : (
													<div
														className="relative rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-125"
														style={{
															width: tw,
															height: th,
															boxShadow: `0 0 0 1px ${COLOR}40, 0 0 8px ${COLOR}30`,
															opacity: 0.65,
														}}
													>
														<img
															src={p.image}
															alt={p.title}
															className="w-full h-full object-cover"
														/>
														<div
															className="absolute inset-0"
															style={{ background: `rgba(8,12,24,0.35)` }}
														/>
													</div>
												)}
											</motion.div>
										</button>
									);
								})}
							</motion.div>
							{/* Centre pulsant */}
							<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
								<div className="relative flex items-center justify-center">
									<motion.div
										className="absolute rounded-full"
										style={{
											width: isMobile ? 24 : 36,
											height: isMobile ? 24 : 36,
											background: `${COLOR}12`,
											border: `1px solid ${COLOR}30`,
										}}
										animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.15, 0.5] }}
										transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
									/>
									<motion.div
										animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="rounded-full z-10"
										style={{
											width: 6,
											height: 6,
											background: COLOR,
											boxShadow: `0 0 12px ${COLOR}`,
										}}
									/>
								</div>
							</div>
							{/* Label tap (desktop uniquement) */}
							{!isMobile && (
								<motion.div
									className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
									style={{ bottom: "14%" }}
									animate={{
										opacity: [0.4, 0.9, 0.4],
										y: [0, -2, 0],
									}}
									transition={{
										duration: 2.5,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									<span
										className="text-[9px] font-mono tracking-widest uppercase"
										style={{ color: COLOR }}
									>
										◈ tap
									</span>
								</motion.div>
							)}
						</div>
					</div>

					{/* Bouton suivant desktop */}
					{!isMobile && (
						<button
							onClick={next}
							className="flex flex-shrink-0 flex-col items-center gap-1 group"
						>
							<div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
								<ChevronRight size={22} strokeWidth={2.5} />
							</div>
							<span className="text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
								{String(((activeIndex + 1) % N) + 1).padStart(2, "0")}
							</span>
						</button>
					)}
				</div>

				{/* Hint clavier — desktop seulement */}
				{!isMobile && (
					<div className="flex justify-center items-center gap-3 mt-6 pb-2">
						<kbd className="px-2.5 py-1 text-xs font-mono rounded-lg border border-white/20 bg-white/5 text-white/60 font-bold">←</kbd>
						<kbd className="px-2.5 py-1 text-xs font-mono rounded-lg border border-white/20 bg-white/5 text-white/60 font-bold">→</kbd>
						<span className="text-xs font-mono text-white/30">clavier · glisser · cliquer</span>
					</div>
				)}
				{/* Hint swipe — mobile seulement */}
				{isMobile && (
					<div className="flex justify-center mt-4">
						<span className="text-xs font-mono text-white/30">← glisser →</span>
					</div>
				)}
			</div>

			{/* Galerie */}
			<AnimatePresence>
				{galleryProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center"
						style={{ background: "rgba(0,0,0,0.93)" }}
						onClick={closeGallery}
					>
						<div
							className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 py-4 z-10"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex items-center gap-2 md:gap-3">
								<span className="text-white font-semibold text-sm md:text-base">
									{galleryProject.title}
								</span>
								<span className="text-white/30 text-xs md:text-sm font-mono">
									{galleryIndex + 1} / {galleryProject.images.length}
								</span>
							</div>
							<div className="flex items-center gap-2 md:gap-3">
								<span
									className="hidden sm:inline text-xs font-mono px-2 py-1 rounded-lg border border-white/15 text-white/40"
									style={{ background: "rgba(255,255,255,0.05)" }}
								>
									{Math.round(zoom * 100)}%
								</span>
								{zoom > 1 && (
									<button
										onClick={() => {
											setZoom(1);
											setPanOffset({ x: 0, y: 0 });
										}}
										className="text-xs font-mono px-3 py-1 rounded-lg border border-white/20 text-white/60 hover:text-white transition-colors"
										style={{ background: "rgba(255,255,255,0.05)" }}
									>
										Réinitialiser
									</button>
								)}
								<button
									onClick={closeGallery}
									className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
								>
									<X size={18} />
								</button>
							</div>
						</div>

						<div
							className="relative flex items-center justify-center w-full flex-1 overflow-hidden"
							onClick={(e) => e.stopPropagation()}
							onWheel={handleGalleryWheel}
							onMouseDown={handleMouseDown}
							onMouseMove={handleMouseMove}
							onMouseUp={handleMouseUp}
							onMouseLeave={handleMouseUp}
							style={{
								cursor: zoom > 1 ? (isPanning.current ? "grabbing" : "grab") : "default",
							}}
						>
							{galleryProject.images.length > 1 && (
								<button
									onClick={() =>
										changeGalleryIndex(
											(galleryIndex - 1 + galleryProject.images.length) %
												galleryProject.images.length
										)
									}
									className="absolute left-2 md:left-4 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110"
									style={{ border: `1px solid ${COLOR}40` }}
								>
									<ChevronLeft size={20} />
								</button>
							)}
							<AnimatePresence mode="wait">
								<motion.div
									key={galleryIndex}
									initial={{ opacity: 0, scale: 0.94 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.94 }}
									transition={{ duration: 0.28 }}
									className="flex items-center justify-center w-full h-full px-12 md:px-16"
								>
									<img
										src={galleryProject.images[galleryIndex]}
										alt={`${galleryProject.title} ${galleryIndex + 1}`}
										draggable={false}
										style={{
											maxHeight: "70vh",
											maxWidth: "100%",
											objectFit: "contain",
											borderRadius: 12,
											transform: `scale(${zoom}) translate(${panOffset.x / zoom}px, ${panOffset.y / zoom}px)`,
											transformOrigin: "center center",
											transition: isPanning.current ? "none" : "transform 0.15s ease",
											userSelect: "none",
										}}
									/>
								</motion.div>
							</AnimatePresence>
							{galleryProject.images.length > 1 && (
								<button
									onClick={() =>
										changeGalleryIndex((galleryIndex + 1) % galleryProject.images.length)
									}
									className="absolute right-2 md:right-4 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110"
									style={{ border: `1px solid ${COLOR}40` }}
								>
									<ChevronRight size={20} />
								</button>
							)}
							{zoom === 1 && (
								<motion.div
									className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
									initial={{ opacity: 0, y: 4 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6 }}
								>
									<span className="text-[11px] font-mono text-white/25 tracking-widest">
										↕ scroll pour zoomer
									</span>
								</motion.div>
							)}
						</div>

						<div
							className="flex justify-center gap-2 py-4 z-10"
							onClick={(e) => e.stopPropagation()}
						>
							{galleryProject.images.map((_, idx) => (
								<button
									key={idx}
									onClick={() => changeGalleryIndex(idx)}
									className="rounded-full transition-all duration-300 h-2"
									style={{
										width: idx === galleryIndex ? 28 : 8,
										background: idx === galleryIndex ? COLOR : "rgba(255,255,255,0.25)",
									}}
								/>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};
export default Projects;

