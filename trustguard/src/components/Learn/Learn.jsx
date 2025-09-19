import React, { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../Card";
import { AlertTriangle, Brain, Eye } from "lucide-react";

const learnTopics = [
	{
		title: "What is Misinformation?",
		description:
			"Learn the difference between misinformation, disinformation, and malinformation, and why it matters.",
		content:
			"Misinformation is false or inaccurate information, often spread without harmful intent. Disinformation is deliberately deceptive. Malinformation is based on reality but used to inflict harm.",
		icon: (
			<AlertTriangle className="h-10 w-10 text-yellow-500 drop-shadow mb-2 mx-auto" />
		),
	},
	{
		title: "How AI Detects Misinformation",
		description: "Understand the basics of how AI models analyze content for credibility.",
		content:
			"AI models use natural language processing, fact-checking databases, and source analysis to assess the trustworthiness of content.",
		icon: <Brain className="h-10 w-10 text-blue-500 drop-shadow mb-2 mx-auto" />,
	},
	{
		title: "Tips for Spotting Fake News",
		description: "Practical advice for users to identify misleading content themselves.",
		content:
			"Check the source, look for corroboration, beware of emotional language, and verify dates and images.",
		icon: <Eye className="h-10 w-10 text-green-500 drop-shadow mb-2 mx-auto" />,
	},
];

export default function Learn() {
	const typewriterText = "Learn About Misinformation";
	const [displayed, setDisplayed] = useState("");
	const idx = useRef(0);
	const timeoutRef = useRef();
	const [isErasing, setIsErasing] = useState(false);

	useEffect(() => {
		if (!isErasing) {
			if (idx.current < typewriterText.length) {
				timeoutRef.current = setTimeout(() => {
					setDisplayed(typewriterText.slice(0, idx.current + 1));
					idx.current++;
				}, 90);
			} else {
				timeoutRef.current = setTimeout(() => {
					setIsErasing(true);
				}, 1200);
			}
		} else {
			if (idx.current > 0) {
				timeoutRef.current = setTimeout(() => {
					idx.current--;
					setDisplayed(typewriterText.slice(0, idx.current));
				}, 40);
			} else {
				timeoutRef.current = setTimeout(() => {
					setIsErasing(false);
				}, 400);
			}
		}
		return () => clearTimeout(timeoutRef.current);
	}, [displayed, isErasing]);

	return (
		<section className="container mx-auto px-4 py-16 min-h-[70vh] bg-gradient-to-b from-blue-50 to-white">
			<h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center drop-shadow-[0_0_16px_rgba(37,99,235,0.2)]">
				<span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent inline-block min-h-[1em] font-[Braddon]">
					{displayed}
				</span>
			</h1>
			<div className="grid gap-8 md:grid-cols-3">
				{learnTopics.map((topic, i) => (
					<Card
						key={i}
						className="h-full border-blue-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-md"
					>
						<CardHeader className="pb-2 text-center flex flex-col items-center">
							{topic.icon}
							<CardTitle className="text-blue-700 mb-1 text-xl md:text-2xl font-bold drop-shadow">
								{topic.title}
							</CardTitle>
							<CardDescription className="text-blue-500 font-medium mb-2">
								{topic.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-gray-700 text-base leading-relaxed min-h-[80px]">
								{topic.content}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
