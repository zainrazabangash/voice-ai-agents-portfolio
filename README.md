# Voice AI Agents Portfolio

This repository contains three voice AI agents I built using Retell AI. Each agent is designed for a different real world business use case, and each one connects to actual backend tools to do real work, not just hold a conversation.

## What is in this repo

The repo has one HTML file and a small Vercel function. The HTML file is the portfolio page that visitors see. The Vercel function creates a temporary access token so visitors can talk to the agents directly from the browser.

## The three agents

### Sophia, dental clinic receptionist

Sophia handles inbound calls for a dental clinic called BrightSmile Dental. She answers questions about hours, services, insurance, and pricing. She also books new patient appointments by connecting to a Cal.com calendar. If a caller mentions a dental emergency, she follows a triage protocol and takes their info for the on call dentist.

Built as a single prompt agent on GPT 4.1. Uses Retell custom functions to talk to the Cal.com API.

### Brian, SaaS sales qualifier

Brian is an outbound sales agent for a fictional SaaS called CloudPilot. He calls leads who filled out a demo request form and qualifies them using the BANT method (Budget, Authority, Need, Timeline). Based on the answers, he either books a demo or politely closes the call. Either way, he logs the full conversation outcome to a CRM.

Built as a multi node Conversation Flow on GPT 4.1. Uses six conversation nodes plus one custom function node. The function node sends data to an n8n webhook, which then writes a new row to an Airtable base in real time.

### Lily, e commerce customer support

Lily handles customer support calls for Tiny Tribes, an online children clothing shop. She answers questions about products, sizing, shipping, returns, and payment methods. She uses a knowledge base that contains all the store information, so the data can be updated without changing the prompt. For order specific questions, she escalates to the human team via WhatsApp.

Built as a single prompt agent on GPT 4.1 Mini. Uses Retell knowledge base for retrieval augmented answers.

## Tech stack

Voice platform: Retell AI
Language models: GPT 4.1 and GPT 4.1 Mini
Backend automation: n8n cloud
Database: Airtable
Booking: Cal.com
Hosting: GitHub Pages and Vercel

## How to run this locally

You only need a browser and a code editor. Open index.html in your browser and the page works on its own. To make the call buttons actually work, you also need a Vercel deployment with the get token serverless function and your Retell API key set as an environment variable.

## How to try the agents

Visit the live site. Click any of the three agent cards. The browser will ask for microphone permission. Once you allow it, you can talk to the agent in real time, just like a phone call.

## What I learned building this

This project taught me how to design conversation flows, write prompts that actually work in voice contexts (short responses, natural acknowledgments, no rambling), wire up custom functions, handle webhook payloads, and integrate multiple third party tools into a working voice agent. Each agent took a different approach because each business need was different, and that taught me how to pick the right architecture for the job.