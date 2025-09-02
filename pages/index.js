/* pages/index.jsx */
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "24px",
        background: "#ffffff", // fond blanc comme tu voulais
        fontFamily: "Inter, Arial, sans-serif",
        color: "#222",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>Welcome to Fintrack 🚀</h1>
      <p style={{ fontSize: "1.08rem", color: "#444", maxWidth: 680, marginBottom: "26px" }}>
        Manage your personal and professional finances easily. Choose your mode below:
      </p>

      {/* Buttons Personal / Pro (côte à côte) */}
      <div style={{ display: "flex", gap: 18, marginBottom: 34 }}>
        <Link href="/personal">
          <button
            style={{
              padding: "12px 28px",
              fontSize: "1rem",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: "#1f6feb",
              fontWeight: 700,
              boxShadow: "0 6px 18px rgba(31,111,235,0.08)",
              transition: "transform .12s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Personal Mode
          </button>
        </Link>

        <Link href="/pro">
          <button
            style={{
              padding: "12px 28px",
              fontSize: "1rem",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: "#0ea5a0",
              fontWeight: 700,
              boxShadow: "0 6px 18px rgba(14,165,160,0.08)",
              transition: "transform .12s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Pro Mode
          </button>
        </Link>
      </div>

      {/* Mini-schemas (centrés, horizontal) */}
      <div style={{ display: "flex", gap: 120, alignItems: "flex-start", marginBottom: 36 }}>
        {/* Personal mini-schema */}
        <div style={{ textAlign: "center", width: 180 }}>
          <div
            style={{
              width: 140,
              margin: "0 auto 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 140,
              borderRadius: 16,
              background: "linear-gradient(135deg,#e6f7ff,#f0fbf8)",
              boxShadow: "0 8px 24px rgba(31,111,235,0.06)",
            }}
          >
            <div style={{ fontSize: 36 }}>💵</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <div style={{ fontWeight: 700, color: "#1f6feb" }}>Personal Flow</div>

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <div style={{ marginBottom: 8, fontWeight: 600 }}>INCOME</div>
              <div style={{ height: 12 }} />
              <div style={{ marginBottom: 8, fontWeight: 600 }}>EXPENSES</div>
              <div style={{ height: 12 }} />
              <div style={{ marginBottom: 2, fontWeight: 600 }}>SAVINGS</div>
            </div>
          </div>
        </div>

        {/* Pro mini-schema */}
        <div style={{ textAlign: "center", width: 180 }}>
          <div
            style={{
              width: 140,
              margin: "0 auto 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 140,
              borderRadius: 16,
              background: "linear-gradient(135deg,#f0fff4,#fff7ed)",
              boxShadow: "0 8px 24px rgba(14,165,160,0.06)",
            }}
          >
            <div style={{ fontSize: 36 }}>📝</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <div style={{ fontWeight: 700, color: "#0ea5a0" }}>Pro Flow</div>

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <div style={{ marginBottom: 8, fontWeight: 600 }}>CREATE CLIENT</div>
              <div style={{ height: 12 }} />
              <div style={{ marginBottom: 8, fontWeight: 600 }}>QUOTATION</div>
              <div style={{ height: 12 }} />
              <div style={{ marginBottom: 2, fontWeight: 600 }}>INVOICE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features (centre, sous les schémas) */}
      <div style={{ maxWidth: 720, textAlign: "center", color: "#444" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: 12 }}>✨ Features</h2>
        <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: 1.9, fontSize: "1.03rem" }}>
          <li>💰 Track your personal income, expenses and savings</li>
          <li>📊 Visualize your financial health with charts</li>
          <li>📝 Create and manage clients, quotes and invoices</li>
          <li>🔔 Receive weekly tips to improve your finances</li>
          <li>🔒 Secure and personalized experience with login</li>
        </ul>
      </div>
    </div>
  );
}
