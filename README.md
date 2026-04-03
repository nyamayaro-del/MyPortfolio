# AI/ML Portfolio

Production-ready AI/ML portfolio with a `frontend` built in Next.js and a `backend` built in FastAPI.

## Folder structure

```text
AI portfolio/
├── backend/
│   ├── app/
│   │   ├── classifier.py
│   │   ├── main.py
│   │   └── schemas.py
│   ├── .env.example
│   ├── README.md
│   └── requirements.txt
├── frontend/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── .env.example
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   └── tsconfig.json
└── README.md
```

## Frontend setup

```bash
cd frontend
copy .env.example .env.local
npm.cmd install
npm.cmd run dev
```

Frontend runs at `http://localhost:3000`.

## Backend setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at `http://127.0.0.1:8000`.

## Deployment

- Deploy `frontend` to Vercel and set `NEXT_PUBLIC_API_URL` to your deployed FastAPI API URL.
- Deploy `backend` to Railway or Render with start command `uvicorn app.main:app --host 0.0.0.0 --port $PORT`.

## Notes

- Replace the placeholder personal details in `frontend/data/portfolio.ts` with your actual name, links, and project details.
- The AI demo uses a lightweight rule-based classifier so it is easy to understand and deploy. You can swap it for a trained model later without changing the frontend contract.
