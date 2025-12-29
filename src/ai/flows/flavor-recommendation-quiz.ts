'use server';

/**
 * @fileOverview A flavor recommendation AI agent.
 *
 * - recommendCake - A function that handles the cake recommendation process based on quiz answers.
 * - FlavorRecommendationInput - The input type for the recommendCake function.
 * - FlavorRecommendationOutput - The return type for the recommendCake function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FlavorRecommendationInputSchema = z.object({
  preferredFruits: z
    .string()
    .describe('The user\'s preferred fruits, comma separated.'),
  sweetnessLevel: z
    .string()
    .describe('The user\'s preferred sweetness level (e.g., not too sweet, moderately sweet, very sweet).'),
  occasion: z
    .string()
    .describe('The occasion for which the cake is being purchased (e.g., birthday, anniversary, casual).'),
  personalityTraits: z
    .string()
    .describe('The user\'s personality traits (e.g., adventurous, classic, sophisticated).'),
});
export type FlavorRecommendationInput = z.infer<typeof FlavorRecommendationInputSchema>;

const FlavorRecommendationOutputSchema = z.object({
  cakeRecommendation: z.string().describe('The recommended cake based on the quiz answers.'),
  addCartLink: z.string().describe('A link to add the recommended cake to the cart.'),
});
export type FlavorRecommendationOutput = z.infer<typeof FlavorRecommendationOutputSchema>;

export async function recommendCake(input: FlavorRecommendationInput): Promise<FlavorRecommendationOutput> {
  return recommendCakeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'flavorRecommendationPrompt',
  input: {schema: FlavorRecommendationInputSchema},
  output: {schema: FlavorRecommendationOutputSchema},
  prompt: `You are an expert pastry chef specializing in Entremet cakes.

Based on the user's preferences, recommend a specific Entremet cake and provide a direct link to add it to the shopping cart.

Consider the following information:

Preferred Fruits: {{{preferredFruits}}}
Sweetness Level: {{{sweetnessLevel}}}
Occasion: {{{occasion}}}
Personality Traits: {{{personalityTraits}}}

Respond with the cake recommendation and the add-to-cart link.
`,
});

const recommendCakeFlow = ai.defineFlow(
  {
    name: 'recommendCakeFlow',
    inputSchema: FlavorRecommendationInputSchema,
    outputSchema: FlavorRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
