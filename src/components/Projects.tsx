import { useState, useEffect, useRef, useCallback } from "react";
import {
	motion,
	AnimatePresence,
	animate,
	useInView,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
	type AnimationPlaybackControls,
	type Variants,
} from "framer-motion";
import { Github, X, ChevronLeft, ChevronRight, ArrowUpRight, Images, Lock, Maximize2 } from "lucide-react";
// VPI site vitrine
import vpiBg from "../assets/VPI_site_vitrine/bg.png";
import vpiBgMobile from "../assets/VPI_site_vitrine/bg_mobile.png";
import vpi1 from "../assets/VPI_site_vitrine/1.png";
import vpi2 from "../assets/VPI_site_vitrine/2.png";
import vpi3 from "../assets/VPI_site_vitrine/3.png";
import vpi4 from "../assets/VPI_site_vitrine/4.png";
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
import vpiAppBg from "../assets/VPI_app/bg.png";
import vpiAppBgMobile from "../assets/VPI_app/bg_mobile.jpg";
import vpiApp1 from "../assets/VPI_app/1.png";
import vpiApp2 from "../assets/VPI_app/2.png";
import vpiApp3 from "../assets/VPI_app/3.png";
import vpiApp4 from "../assets/VPI_app/4.png";
import vpiApp5 from "../assets/VPI_app/5.png";
import vpiApp6 from "../assets/VPI_app/6.png";
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

const COLOR = "#C4A050";
const BG = "#13110d";
const CARD_BG = "#1a1710";
const TEXT = "hsl(40 20% 92%)";
const TEXT_MUTED = "hsl(40 10% 62%)";
const DISPLAY_FONT = "'Barlow Condensed', sans-serif";
const EASE = [0.76, 0, 0.24, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 7000;

type Project = {
	title: string;
	shortTitle: string;
	category: string;
	description: string;
	tags: string[];
	image: string;
	imageMobile: string;
	images: string[];
	github: string | null;
	live: string | null;
	liveLabel: string | null;
	year: string;
};

const allProjects: Project[] = [
	{
		title: "Vanilla Pay International",
		shortTitle: "VPI",
		category: "Branding · Site vitrine",
		description: "Rebranding complet de la société incluant la refonte du logo, la charte graphique et le développement d'un site web vitrine moderne et responsive.",
		tags: ["HTML", "CSS", "Design", "Branding"],
		image: vpiBg,
		imageMobile: vpiBgMobile,
		images: [vpi1, vpi2, vpi3, vpi4],
		github: null, live: "https://vanilla-pay.net", liveLabel: "Voir le site", year: "2025",
	},
	{
		title: "MADAVISION",
		shortTitle: "MDV",
		category: "Plateforme web",
		description: "Site front office complet pour l'inscription et la réservation de stands d'exposition, avec un système de facturation proforma automatisé.",
		tags: ["React", "Node.js", "PostgreSQL", "PDF"],
		image: madaBg,
		imageMobile: madaBgMobile,
		images: [mada1, mada2, mada3, mada4, mada5, mada6, mada7, mada8, mada9],
		github: null, live: "https://mada-vision.com", liveLabel: "Voir le site", year: "2025",
	},
	{
		title: "ONTM - ITM & IHM",
		shortTitle: "ONTM",
		category: "Plateforme web",
		description: "Solution digitale pour l'Office National du Tourisme avec plan interactif des stands et réservation en temps réel.",
		tags: ["React", "Maps", "Node.js", "API"],
		image: itmBg,
		imageMobile: itmBgMobile,
		images: [itm1, itm2, itm3, itm4, itm5, itm6, itm7, itm8, itm9],
		github: null, live: "https://inscription.itm-madagascar-tourisme.com", liveLabel: "Voir le site", year: "2026",
	},
	{
		title: "Madagasc'art",
		shortTitle: "M/ART",
		category: "E-commerce",
		description: "Plateforme élégante présentant les marques et produits artisanaux malgaches, spécialisée dans les sacs en raphia.",
		tags: ["Next.js", "E-commerce", "Design"],
		image: madagascartBg,
		imageMobile: madagascartBgMobile,
		images: [madagascart1, madagascart2, madagascart3],
		github: null, live: "https://madagascart.vercel.app", liveLabel: "Voir le site", year: "2024",
	},
	{
		title: "Vanilla Pay Mobile",
		shortTitle: "VPM",
		category: "Application mobile",
		description: "Application mobile innovante facilitant les paiements pour les touristes étrangers, avec conversion automatique des devises.",
		tags: ["React Native", "Fintech", "Mobile"],
		image: vpiAppBg,
		imageMobile: vpiAppBgMobile,
		images: [vpiApp1, vpiApp2, vpiApp3, vpiApp4, vpiApp5, vpiApp6],
		github: null, live: null, liveLabel: null, year: "2024",
	},
	{
		title: "B2B Networking Salons",
		shortTitle: "B2B",
		category: "Plateforme B2B",
		description: "Plateforme collaborative pour les exposants avec système de rendez-vous en temps réel et messagerie intégrée.",
		tags: ["React", "WebSocket", "B2B"],
		image: b2bBg,
		imageMobile: b2bBgMobile,
		images: [b2b1, b2b2, b2b3, b2b4, b2b5, b2b6, b2b7],
		github: null, live: null, liveLabel: null, year: "2024",
	},
];

const N = allProjects.length;

const DISC_R = 96;
const DISC_SIZE = DISC_R * 2 + 108;
const DISC_R_MOBILE = 70;
const DISC_SIZE_MOBILE = DISC_R_MOBILE * 2 + 84;
// Part du disque qui dépasse sous la carte
const DISC_OVERFLOW = 0.6;

const pad = (n: number) => String(n).padStart(2, "0");

// Transition "volet" de l'image principale, orientée selon le sens de navigation
const wipeVariants: Variants = {
	enter: (dir: number) => ({
		clipPath: dir > 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
		zIndex: 2,
	}),
	center: {
		clipPath: "inset(0% 0% 0% 0%)",
		zIndex: 2,
		transition: { duration: 0.95, ease: EASE },
	},
	exit: (dir: number) => ({
		zIndex: 1,
		x: dir > 0 ? "-10%" : "10%",
		opacity: 0.3,
		transition: { duration: 0.95, ease: EASE },
	}),
};

const infoContainer: Variants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
	exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const infoItem: Variants = {
	hidden: { opacity: 0, y: 18 },
	show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
	exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const titleWord: Variants = {
	hidden: { y: "110%" },
	show: { y: "0%", transition: { duration: 0.7, ease: EASE_OUT } },
	exit: { y: "-110%", transition: { duration: 0.25, ease: "easeIn" } },
};

const Projects = () => {
	const [[activeIndex, direction], setSlide] = useState<[number, number]>([0, 1]);
	const [rotation, setRotation] = useState(0);
	const [galleryProject, setGalleryProject] = useState<Project | null>(null);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const [galleryDirection, setGalleryDirection] = useState(1);
	const [isMobile, setIsMobile] = useState(false);
	const [pointerInside, setPointerInside] = useState(false);
	const [zoom, setZoom] = useState(1);
	const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
	const isPanning = useRef(false);
	const panStart = useRef({ x: 0, y: 0 });
	const touchStartX = useRef<number>(0);
	const galleryTouchStartX = useRef<number>(0);
	const sectionRef = useRef<HTMLElement>(null);
	const thumbsRef = useRef<HTMLDivElement>(null);
	const autoplayRef = useRef<AnimationPlaybackControls | null>(null);

	const reduceMotion = useReducedMotion();
	const inView = useInView(sectionRef, { amount: 0.35 });

	// Progression de l'autoplay (0 → 1)
	const progress = useMotionValue(0);

	// Parallaxe légère de l'image au survol
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
	const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
	const imgX = useTransform(springX, (v) => v * -14);
	const imgY = useTransform(springY, (v) => v * -14);

	// Détection mobile
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 640);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	const discSize = isMobile ? DISC_SIZE_MOBILE : DISC_SIZE;
	const discR = isMobile ? DISC_R_MOBILE : DISC_R;

	// Ref pour que l'autoplay (callback asynchrone) lise toujours l'index courant
	const activeIndexRef = useRef(activeIndex);
	activeIndexRef.current = activeIndex;

	const goTo = useCallback((index: number) => {
		const current = activeIndexRef.current;
		if (index === current) return;
		const rawDiff = index - current;
		let diff = rawDiff;
		if (Math.abs(rawDiff) > N / 2) diff = rawDiff > 0 ? rawDiff - N : rawDiff + N;
		activeIndexRef.current = index;
		setSlide([index, diff > 0 ? 1 : -1]);
		setRotation((r) => r - (360 / N) * diff);
	}, []);

	const paginate = useCallback((step: number) => {
		goTo((activeIndexRef.current + step + N) % N);
	}, [goTo]);

	const prev = () => paginate(-1);
	const next = () => paginate(1);

	// Autoplay : redémarre à chaque changement de projet
	useEffect(() => {
		if (reduceMotion) return;
		progress.set(0);
		const controls = animate(progress, 1, {
			duration: AUTOPLAY_MS / 1000,
			ease: "linear",
			onComplete: () => paginate(1),
		});
		autoplayRef.current = controls;
		return () => controls.stop();
	}, [activeIndex, reduceMotion, progress, paginate]);

	const paused = !inView || pointerInside || !!galleryProject;
	useEffect(() => {
		const controls = autoplayRef.current;
		if (!controls) return;
		if (paused) controls.pause();
		else controls.play();
	}, [paused, activeIndex]);

	// Précharge les images voisines pour des transitions sans saccade
	useEffect(() => {
		[1, -1].forEach((step) => {
			const p = allProjects[(activeIndex + step + N) % N];
			const img = new Image();
			img.src = isMobile ? p.imageMobile : p.image;
		});
	}, [activeIndex, isMobile]);

	const openGallery = (p: Project, idx = 0) => {
		setGalleryProject(p);
		setGalleryIndex(idx);
		setZoom(1);
		setPanOffset({ x: 0, y: 0 });
	};
	const closeGallery = () => {
		setGalleryProject(null);
		setZoom(1);
		setPanOffset({ x: 0, y: 0 });
	};
	const changeGalleryIndex = (idx: number, dir?: number) => {
		setGalleryDirection(dir ?? (idx > galleryIndex ? 1 : -1));
		setGalleryIndex(idx);
		setZoom(1);
		setPanOffset({ x: 0, y: 0 });
	};
	const galleryStep = (step: number) => {
		if (!galleryProject) return;
		const len = galleryProject.images.length;
		changeGalleryIndex((galleryIndex + step + len) % len, step);
	};

	useEffect(() => {
		document.body.style.overflow = galleryProject ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [galleryProject]);

	// Garde la miniature active visible dans la galerie
	useEffect(() => {
		const strip = thumbsRef.current;
		const active = strip?.querySelector<HTMLElement>(`[data-thumb="${galleryIndex}"]`);
		if (!strip || !active) return;
		strip.scrollTo({
			left: active.offsetLeft - strip.clientWidth / 2 + active.clientWidth / 2,
			behavior: "smooth",
		});
	}, [galleryIndex, galleryProject]);

	// Clavier : galerie en priorité, sinon flèches uniquement quand la section est visible
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (galleryProject) {
				if (e.key === "ArrowLeft") galleryStep(-1);
				if (e.key === "ArrowRight") galleryStep(1);
				if (e.key === "Escape") closeGallery();
				return;
			}
			if (!inView) return;
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [galleryProject, galleryIndex, inView]); // eslint-disable-line

	// Zoom molette dans la galerie
	const handleGalleryWheel = (e: React.WheelEvent) => {
		e.stopPropagation();
		setZoom((z) => {
			const nz = Math.min(4, Math.max(1, z - e.deltaY * 0.002));
			if (nz <= 1) setPanOffset({ x: 0, y: 0 });
			return nz;
		});
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

	const handleStageMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (reduceMotion) return;
		const rect = e.currentTarget.getBoundingClientRect();
		mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
	};
	const resetStageMove = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	const project = allProjects[activeIndex];
	const nextProject = allProjects[(activeIndex + 1) % N];
	const bgImage = isMobile ? project.imageMobile : project.image;

	return (
		<section
			ref={sectionRef}
			id="projects"
			className="relative overflow-hidden px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24"
			style={{ background: BG, paddingTop: "7rem", paddingBottom: "6rem" }}
		>
			{/* Halo d'ambiance */}
			<div
				aria-hidden
				className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
				style={{
					width: "min(1100px, 120vw)",
					height: "min(1100px, 120vw)",
					background: `radial-gradient(circle, ${COLOR}14 0%, transparent 60%)`,
					filter: "blur(20px)",
				}}
			/>

			<div className="relative max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-10 md:mb-14 flex flex-wrap items-end justify-between gap-6"
				>
					<div>
						<p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: COLOR }}>03. Projets</p>
						<h2
							className="font-black uppercase leading-none"
							style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(48px, 7vw, 96px)", color: TEXT }}
						>
							Ce que j'ai construit
						</h2>
					</div>
					<p className="hidden md:block max-w-xs text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
						Une sélection de projets web et mobile, du branding jusqu'aux plateformes temps réel.
					</p>
				</motion.div>

				<div
					className="grid items-center gap-y-6 gap-x-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]"
					onPointerEnter={(e) => e.pointerType === "mouse" && setPointerInside(true)}
					onPointerLeave={(e) => e.pointerType === "mouse" && setPointerInside(false)}
				>
					{/* ───── Scène image + disque ───── */}
					<div className="relative" style={{ marginBottom: discSize * DISC_OVERFLOW - 8 }}>
						<div
							role="button"
							tabIndex={0}
							aria-label={`Ouvrir les captures de ${project.title}`}
							className="group relative w-full overflow-hidden rounded-[22px] md:rounded-[28px] border cursor-pointer outline-none focus-visible:ring-2"
							style={{
								aspectRatio: isMobile ? "4 / 5" : "16 / 10",
								background: CARD_BG,
								borderColor: `${COLOR}22`,
								boxShadow: `0 40px 80px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.02)`,
							}}
							onClick={() => openGallery(project)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									openGallery(project);
								}
							}}
							onMouseMove={handleStageMove}
							onMouseLeave={resetStageMove}
							onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
							onTouchEnd={(e) => {
								const dx = e.changedTouches[0].clientX - touchStartX.current;
								if (dx < -50) next();
								else if (dx > 50) prev();
							}}
						>
							<AnimatePresence initial={false} custom={direction}>
								<motion.div
									key={activeIndex + "-" + String(isMobile)}
									custom={direction}
									variants={wipeVariants}
									initial="enter"
									animate="center"
									exit="exit"
									className="absolute inset-0 overflow-hidden"
								>
									<motion.img
										src={bgImage}
										alt={project.title}
										draggable={false}
										className="absolute inset-0 w-full h-full object-cover object-top select-none"
										style={{ x: imgX, y: imgY }}
										initial={{ scale: 1.25 }}
										animate={{ scale: 1.08 }}
										transition={{ duration: 1.4, ease: EASE_OUT }}
									/>
								</motion.div>
							</AnimatePresence>

							{/* Dégradés de lisibilité */}
							<div
								className="absolute inset-0 z-10 pointer-events-none"
								style={{
									background: `linear-gradient(to top, ${BG}e6 0%, ${BG}66 22%, transparent 48%), linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 22%)`,
								}}
							/>

							{/* Catégorie + année */}
							<AnimatePresence mode="wait">
								<motion.div
									key={activeIndex + "-badge"}
									initial={{ opacity: 0, y: -8 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.4 } }}
									exit={{ opacity: 0, transition: { duration: 0.15 } }}
									className="absolute top-4 left-4 md:top-5 md:left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border text-[10px] md:text-xs font-mono"
									style={{ background: "rgba(13,11,8,0.6)", borderColor: `${COLOR}40`, color: COLOR }}
								>
									<span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR, boxShadow: `0 0 8px ${COLOR}` }} />
									{project.category}
									<span style={{ color: `${COLOR}70` }}>· {project.year}</span>
								</motion.div>
							</AnimatePresence>

							{/* Invitation galerie */}
							<div
								className="absolute top-4 right-4 md:top-5 md:right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border text-[10px] md:text-xs font-mono transition-all duration-300 md:opacity-0 md:translate-y-[-4px] md:group-hover:opacity-100 md:group-hover:translate-y-0"
								style={{ background: "rgba(13,11,8,0.6)", borderColor: "rgba(255,255,255,0.12)", color: TEXT }}
							>
								<Maximize2 size={12} />
								<span>{project.images.length} captures</span>
							</div>

							{/* Barre d'autoplay */}
							<div className="absolute bottom-0 left-0 right-0 h-[2px] z-20" style={{ background: `${COLOR}18` }}>
								<motion.div
									className="h-full origin-left"
									style={{ background: COLOR, scaleX: reduceMotion ? (activeIndex + 1) / N : progress }}
								/>
							</div>
						</div>

						{/* Disque rotatif */}
						<div
							className="absolute bottom-0 left-1/2 z-30"
							style={{
								width: discSize,
								height: discSize,
								transform: `translate(-50%, ${DISC_OVERFLOW * 100}%)`,
							}}
						>
							<div
								className="absolute inset-3 rounded-full"
								style={{
									background: "rgba(19,17,13,0.82)",
									backdropFilter: "blur(18px)",
									WebkitBackdropFilter: "blur(18px)",
									boxShadow: `0 20px 50px rgba(0,0,0,0.6), inset 0 0 30px rgba(19,17,13,0.5)`,
								}}
							/>
							<div
								className="absolute inset-0 rounded-full border"
								style={{ borderColor: `${COLOR}55`, boxShadow: `0 0 18px ${COLOR}20, inset 0 0 15px ${COLOR}08` }}
							/>
							<div className="absolute rounded-full border border-dashed" style={{ inset: isMobile ? 10 : 14, borderColor: `${COLOR}25` }} />

							<motion.div
								className="absolute inset-0"
								animate={{ rotate: rotation }}
								transition={{ type: "spring", stiffness: 60, damping: 18 }}
							>
								{allProjects.map((p, i) => {
									const rad = ((360 / N) * i - 90) * (Math.PI / 180);
									const cx = 50 + (discR / discSize) * 100 * Math.cos(rad);
									const cy = 50 + (discR / discSize) * 100 * Math.sin(rad);
									const isActive = i === activeIndex;
									const tw = isMobile ? (isActive ? 44 : 30) : (isActive ? 64 : 44);
									const th = isMobile ? (isActive ? 32 : 22) : (isActive ? 46 : 32);
									return (
										<button
											key={p.title}
											onClick={() => goTo(i)}
											aria-label={`Voir le projet ${p.title}`}
											aria-current={isActive}
											className="absolute -translate-x-1/2 -translate-y-1/2 group/thumb"
											style={{ left: `${cx}%`, top: `${cy}%` }}
										>
											<motion.div
												animate={{ rotate: -rotation }}
												transition={{ type: "spring", stiffness: 60, damping: 18 }}
											>
												<motion.div
													className="relative overflow-hidden"
													animate={{
														width: tw,
														height: th,
														borderRadius: isActive ? 12 : 8,
														opacity: isActive ? 1 : 0.55,
													}}
													whileHover={{ opacity: 1, scale: isActive ? 1 : 1.15 }}
													transition={{ duration: 0.4, ease: EASE_OUT }}
													style={{
														boxShadow: isActive
															? `0 0 0 2px ${COLOR}, 0 0 24px ${COLOR}80`
															: `0 0 0 1px ${COLOR}40`,
													}}
												>
													<img src={p.image} alt="" className="w-full h-full object-cover" draggable={false} />
												</motion.div>
											</motion.div>
										</button>
									);
								})}
							</motion.div>

							{/* Centre : compteur */}
							<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
								<motion.div
									className="absolute rounded-full"
									style={{ width: isMobile ? 52 : 70, height: isMobile ? 52 : 70, border: `1px solid ${COLOR}30` }}
									animate={reduceMotion ? undefined : { scale: [1, 1.25, 1], opacity: [0.6, 0.1, 0.6] }}
									transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
								/>
								<div className="flex items-baseline font-mono leading-none">
									<AnimatePresence mode="popLayout" initial={false}>
										<motion.span
											key={activeIndex}
											initial={{ y: direction * 14, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: direction * -14, opacity: 0 }}
											transition={{ duration: 0.35, ease: EASE_OUT }}
											className="font-bold text-base md:text-xl"
											style={{ color: COLOR }}
										>
											{pad(activeIndex + 1)}
										</motion.span>
									</AnimatePresence>
									<span className="text-[10px] md:text-xs ml-0.5" style={{ color: `${COLOR}60` }}>/{pad(N)}</span>
								</div>
							</div>
						</div>
					</div>

					{/* ───── Panneau d'informations ───── */}
					<div className="relative flex flex-col lg:min-h-[480px] lg:justify-center">
						<div className="relative min-h-[300px] sm:min-h-[260px] lg:min-h-[360px]">
							{/* Grand numéro en filigrane */}
							<AnimatePresence mode="wait">
								<motion.span
									key={activeIndex + "-num"}
									aria-hidden
									initial={{ opacity: 0, x: direction * 30 }}
									animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } }}
									exit={{ opacity: 0, x: direction * -30, transition: { duration: 0.2 } }}
									className="absolute -top-6 md:-top-10 right-0 font-black leading-none select-none pointer-events-none"
									style={{
										fontFamily: DISPLAY_FONT,
										fontSize: "clamp(110px, 14vw, 190px)",
										color: "transparent",
										WebkitTextStroke: `1px ${COLOR}30`,
									}}
								>
									{pad(activeIndex + 1)}
								</motion.span>
							</AnimatePresence>

							<AnimatePresence mode="wait">
								<motion.div
									key={activeIndex}
									variants={infoContainer}
									initial="hidden"
									animate="show"
									exit="exit"
									className="relative"
								>
									<motion.p variants={infoItem} className="text-[11px] font-mono tracking-[0.2em] uppercase mb-4" style={{ color: `${COLOR}b0` }}>
										{project.shortTitle} — {project.year}
									</motion.p>

									<motion.h3
										variants={infoContainer}
										className="font-black uppercase leading-[0.92] mb-5"
										style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(40px, 5vw, 68px)", color: TEXT }}
									>
										{project.title.split(" ").map((word, i) => (
											<span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-[0.22em]">
												<motion.span variants={titleWord} className="inline-block">{word}</motion.span>
											</span>
										))}
									</motion.h3>

									<motion.p variants={infoItem} className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: TEXT_MUTED }}>
										{project.description}
									</motion.p>

									<motion.div variants={infoItem} className="flex flex-wrap gap-2 mb-7">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 text-[11px] md:text-xs font-mono rounded-full border"
												style={{ background: `${COLOR}0d`, borderColor: `${COLOR}35`, color: `${COLOR}e0` }}
											>
												{tag}
											</span>
										))}
									</motion.div>

									<motion.div variants={infoItem} className="flex flex-wrap items-center gap-3">
										{project.live && (
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												className="group inline-flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5"
												style={{ background: COLOR, color: "#0e0c08", boxShadow: `0 10px 30px -10px ${COLOR}90` }}
											>
												{project.liveLabel ?? "Voir le site"}
												<ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
											</a>
										)}
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5"
												style={{ borderColor: `${COLOR}50`, color: COLOR, background: `${COLOR}10` }}
											>
												<Github size={15} /> GitHub
											</a>
										)}
										{!project.live && !project.github && (
											<span
												className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono border"
												style={{ borderColor: `${COLOR}25`, color: `${COLOR}80` }}
											>
												<Lock size={13} /> Projet privé · non public
											</span>
										)}
										<button
											onClick={() => openGallery(project)}
											className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5"
											style={{ borderColor: "rgba(255,255,255,0.14)", color: TEXT, background: "rgba(255,255,255,0.03)" }}
										>
											<Images size={15} className="transition-transform group-hover:scale-110" style={{ color: COLOR }} />
											{project.images.length} captures
										</button>
									</motion.div>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Navigation */}
						<div className="mt-10 pt-6 border-t" style={{ borderColor: `${COLOR}18` }}>
							<div className="flex items-center gap-1.5 mb-5" role="tablist" aria-label="Projets">
								{allProjects.map((p, i) => {
									const isActive = i === activeIndex;
									return (
										<button
											key={p.title}
											role="tab"
											aria-selected={isActive}
											aria-label={p.title}
											onClick={() => goTo(i)}
											className="group/seg relative flex-1 py-2"
										>
											<span
												className="block h-[3px] rounded-full overflow-hidden transition-colors duration-300"
												style={{ background: isActive ? `${COLOR}30` : `${COLOR}18` }}
											>
												{isActive && (
													<motion.span
														className="block h-full origin-left rounded-full"
														style={{ background: COLOR, scaleX: reduceMotion ? 1 : progress }}
													/>
												)}
											</span>
											<span
												className="absolute left-0 -top-4 text-[10px] font-mono opacity-0 group-hover/seg:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
												style={{ color: `${COLOR}90` }}
											>
												{p.shortTitle}
											</span>
										</button>
									);
								})}
							</div>

							<div className="flex items-center justify-between gap-4">
								<div className="flex items-center gap-2">
									<button
										onClick={prev}
										aria-label="Projet précédent"
										className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-105"
										style={{ borderColor: `${COLOR}40`, color: COLOR, background: `${COLOR}0d` }}
									>
										<ChevronLeft size={20} />
									</button>
									<button
										onClick={next}
										aria-label="Projet suivant"
										className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
										style={{ background: COLOR, color: "#0e0c08" }}
									>
										<ChevronRight size={20} strokeWidth={2.5} />
									</button>
								</div>

								<button onClick={next} className="group text-right min-w-0">
									<span className="block text-[10px] font-mono tracking-widest uppercase mb-0.5" style={{ color: `${COLOR}70` }}>
										Suivant
									</span>
									<AnimatePresence mode="wait" initial={false}>
										<motion.span
											key={nextProject.title}
											initial={{ opacity: 0, y: 6 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -6 }}
											transition={{ duration: 0.25 }}
											className="block truncate font-bold uppercase text-base md:text-lg transition-colors group-hover:text-[#C4A050]"
											style={{ fontFamily: DISPLAY_FONT, color: TEXT }}
										>
											{nextProject.title}
										</motion.span>
									</AnimatePresence>
								</button>
							</div>

							<p className="hidden lg:flex items-center gap-2 mt-6 text-[11px] font-mono" style={{ color: `${COLOR}55` }}>
								<kbd className="px-1.5 py-0.5 rounded border" style={{ borderColor: `${COLOR}30` }}>←</kbd>
								<kbd className="px-1.5 py-0.5 rounded border" style={{ borderColor: `${COLOR}30` }}>→</kbd>
								naviguer · clic sur l'image pour la galerie
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* ───── Galerie ───── */}
			<AnimatePresence>
				{galleryProject && (
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-label={`Captures — ${galleryProject.title}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-[100] flex flex-col"
						style={{ background: "rgba(8,7,5,0.94)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
						onClick={closeGallery}
					>
						<div
							className="flex items-center justify-between gap-4 px-4 md:px-8 py-4"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="min-w-0">
								<p className="text-[10px] font-mono tracking-widest uppercase" style={{ color: `${COLOR}90` }}>
									{galleryProject.category}
								</p>
								<p className="truncate font-bold uppercase text-lg md:text-2xl leading-tight" style={{ fontFamily: DISPLAY_FONT, color: TEXT }}>
									{galleryProject.title}
								</p>
							</div>
							<div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
								<span className="text-xs md:text-sm font-mono" style={{ color: `${COLOR}` }}>
									{pad(galleryIndex + 1)}
									<span className="text-white/30"> / {pad(galleryProject.images.length)}</span>
								</span>
								{zoom > 1 && (
									<button
										onClick={() => {
											setZoom(1);
											setPanOffset({ x: 0, y: 0 });
										}}
										className="hidden sm:inline text-xs font-mono px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white transition-colors"
									>
										{Math.round(zoom * 100)}% · Réinitialiser
									</button>
								)}
								<button
									onClick={closeGallery}
									aria-label="Fermer la galerie"
									className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:rotate-90 duration-300"
								>
									<X size={18} />
								</button>
							</div>
						</div>

						<div
							className="relative flex items-center justify-center w-full flex-1 min-h-0 overflow-hidden"
							onClick={(e) => e.stopPropagation()}
							onWheel={handleGalleryWheel}
							onMouseDown={handleMouseDown}
							onMouseMove={handleMouseMove}
							onMouseUp={handleMouseUp}
							onMouseLeave={handleMouseUp}
							onDoubleClick={() => {
								setZoom((z) => (z > 1 ? 1 : 2));
								setPanOffset({ x: 0, y: 0 });
							}}
							onTouchStart={(e) => { galleryTouchStartX.current = e.touches[0].clientX; }}
							onTouchEnd={(e) => {
								if (zoom > 1) return;
								const dx = e.changedTouches[0].clientX - galleryTouchStartX.current;
								if (dx < -50) galleryStep(1);
								else if (dx > 50) galleryStep(-1);
							}}
							style={{ cursor: zoom > 1 ? "grab" : "zoom-in" }}
						>
							{galleryProject.images.length > 1 && (
								<button
									onClick={() => galleryStep(-1)}
									aria-label="Image précédente"
									className="absolute left-2 md:left-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-110"
									style={{ background: "rgba(0,0,0,0.5)", border: `1px solid ${COLOR}40` }}
								>
									<ChevronLeft size={20} />
								</button>
							)}
							<AnimatePresence mode="popLayout" initial={false} custom={galleryDirection}>
								<motion.div
									key={galleryIndex}
									custom={galleryDirection}
									initial={{ opacity: 0, x: galleryDirection * 60, scale: 0.97 }}
									animate={{ opacity: 1, x: 0, scale: 1 }}
									exit={{ opacity: 0, x: galleryDirection * -60, scale: 0.97 }}
									transition={{ duration: 0.4, ease: EASE_OUT }}
									className="flex items-center justify-center w-full h-full px-14 md:px-24 py-2"
								>
									<img
										src={galleryProject.images[galleryIndex]}
										alt={`${galleryProject.title} ${galleryIndex + 1}`}
										draggable={false}
										className="max-w-full max-h-full object-contain rounded-xl"
										style={{
											boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
											transform: `scale(${zoom}) translate(${panOffset.x / zoom}px, ${panOffset.y / zoom}px)`,
											transformOrigin: "center center",
											transition: isPanning.current ? "none" : "transform 0.2s ease",
											userSelect: "none",
										}}
									/>
								</motion.div>
							</AnimatePresence>
							{galleryProject.images.length > 1 && (
								<button
									onClick={() => galleryStep(1)}
									aria-label="Image suivante"
									className="absolute right-2 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-110"
									style={{ background: "rgba(0,0,0,0.5)", border: `1px solid ${COLOR}40` }}
								>
									<ChevronRight size={20} />
								</button>
							)}
						</div>

						{/* Miniatures */}
						<div className="py-4" onClick={(e) => e.stopPropagation()}>
							<div
								ref={thumbsRef}
								className="flex gap-2 md:gap-3 overflow-x-auto px-4 md:px-8 mx-auto max-w-full w-fit [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
							>
								{galleryProject.images.map((src, idx) => {
									const isActive = idx === galleryIndex;
									return (
										<button
											key={idx}
											data-thumb={idx}
											onClick={() => changeGalleryIndex(idx)}
											aria-label={`Image ${idx + 1}`}
											className="relative flex-shrink-0 w-16 h-11 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300"
											style={{
												opacity: isActive ? 1 : 0.4,
												boxShadow: isActive ? `0 0 0 2px ${COLOR}` : "0 0 0 1px rgba(255,255,255,0.1)",
												transform: isActive ? "translateY(-2px)" : "none",
											}}
										>
											<img src={src} alt="" className="w-full h-full object-cover object-top" draggable={false} />
										</button>
									);
								})}
							</div>
							<p className="hidden md:block text-center mt-3 text-[11px] font-mono text-white/25 tracking-widest">
								molette ou double-clic pour zoomer · ← → pour naviguer · échap pour fermer
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};
export default Projects;
