/**
 * ChartCraft Academy - Comprehensive Course & Curriculum Database
 * 11 Full Educational Courses with Chapters, Interactive SVG Diagram Templates,
 * Key Takeaways, Common Mistakes, and Practice Quizzes.
 */

const ChartDiagrams = {
  // SVG generator for Candlestick Anatomy
  candleAnatomy: () => `
    <svg viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 260px;">
      <!-- Grid Lines -->
      <line x1="40" y1="40" x2="460" y2="40" stroke="var(--border-color)" stroke-dasharray="4 4" />
      <line x1="40" y1="100" x2="460" y2="100" stroke="var(--border-color)" stroke-dasharray="4 4" />
      <line x1="40" y1="180" x2="460" y2="180" stroke="var(--border-color)" stroke-dasharray="4 4" />
      <line x1="40" y1="240" x2="460" y2="240" stroke="var(--border-color)" stroke-dasharray="4 4" />
      
      <!-- Bullish Candle -->
      <!-- Upper Wick -->
      <line x1="160" y1="40" x2="160" y2="100" stroke="var(--bullish)" stroke-width="3" stroke-linecap="round" />
      <!-- Real Body -->
      <rect x="130" y="100" width="60" height="80" rx="4" fill="var(--bullish-bg)" stroke="var(--bullish)" stroke-width="3" />
      <!-- Lower Wick -->
      <line x1="160" y1="180" x2="160" y2="240" stroke="var(--bullish)" stroke-width="3" stroke-linecap="round" />
      
      <!-- Labels for Bullish -->
      <text x="160" y="25" fill="var(--text-primary)" font-size="12" font-weight="700" text-anchor="middle">HIGH (Peak)</text>
      <text x="205" y="105" fill="var(--bullish)" font-size="12" font-weight="600">CLOSE (Bullish)</text>
      <line x1="195" y1="100" x2="225" y2="100" stroke="var(--bullish)" stroke-width="1.5" />
      
      <text x="205" y="185" fill="var(--text-secondary)" font-size="12" font-weight="600">OPEN</text>
      <line x1="195" y1="180" x2="225" y2="180" stroke="var(--text-muted)" stroke-width="1.5" />
      
      <text x="160" y="260" fill="var(--text-primary)" font-size="12" font-weight="700" text-anchor="middle">LOW (Floor)</text>
      <text x="160" y="145" fill="var(--bullish)" font-size="13" font-weight="700" text-anchor="middle">REAL BODY</text>

      <!-- Upper / Lower Wick brackets -->
      <text x="80" y="70" fill="var(--text-muted)" font-size="11" text-anchor="end">Upper Shadow (Wick) →</text>
      <text x="80" y="215" fill="var(--text-muted)" font-size="11" text-anchor="end">Lower Shadow (Wick) →</text>

      <!-- Bearish Candle -->
      <line x1="340" y1="50" x2="340" y2="90" stroke="var(--bearish)" stroke-width="3" stroke-linecap="round" />
      <rect x="310" y="90" width="60" height="90" rx="4" fill="var(--bearish-bg)" stroke="var(--bearish)" stroke-width="3" />
      <line x1="340" y1="180" x2="340" y2="230" stroke="var(--bearish)" stroke-width="3" stroke-linecap="round" />
      
      <!-- Labels for Bearish -->
      <text x="340" y="25" fill="var(--text-primary)" font-size="12" font-weight="700" text-anchor="middle">HIGH</text>
      <text x="385" y="95" fill="var(--text-secondary)" font-size="12" font-weight="600">OPEN</text>
      <text x="385" y="185" fill="var(--bearish)" font-size="12" font-weight="600">CLOSE (Bearish)</text>
      <text x="340" y="255" fill="var(--text-primary)" font-size="12" font-weight="700" text-anchor="middle">LOW</text>
      <text x="340" y="140" fill="var(--bearish)" font-size="13" font-weight="700" text-anchor="middle">REAL BODY</text>
    </svg>
  `,

  // SVG for Reversal Patterns: Doji, Hammer, Shooting Star
  candlestickPatterns: () => `
    <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 240px;">
      <!-- Pattern 1: Doji -->
      <g transform="translate(40, 20)">
        <line x1="50" y1="20" x2="50" y2="160" stroke="var(--text-secondary)" stroke-width="2.5" />
        <line x1="30" y1="90" x2="70" y2="90" stroke="var(--accent-primary)" stroke-width="4" stroke-linecap="round" />
        <text x="50" y="195" fill="var(--text-primary)" font-size="12" font-weight="700" text-anchor="middle">DOJI</text>
        <text x="50" y="210" fill="var(--text-muted)" font-size="10" text-anchor="middle">Indecision / Balance</text>
      </g>
      
      <!-- Pattern 2: Hammer (Bullish Reversal) -->
      <g transform="translate(180, 20)">
        <line x1="50" y1="30" x2="50" y2="40" stroke="var(--bullish)" stroke-width="2" />
        <rect x="30" y="40" width="40" height="28" rx="2" fill="var(--bullish-bg)" stroke="var(--bullish)" stroke-width="2.5" />
        <line x1="50" y1="68" x2="50" y2="165" stroke="var(--bullish)" stroke-width="2.5" />
        <text x="50" y="195" fill="var(--bullish)" font-size="12" font-weight="700" text-anchor="middle">HAMMER</text>
        <text x="50" y="210" fill="var(--text-muted)" font-size="10" text-anchor="middle">Long lower wick (Rejection)</text>
      </g>

      <!-- Pattern 3: Shooting Star (Bearish Reversal) -->
      <g transform="translate(320, 20)">
        <line x1="50" y1="25" x2="50" y2="120" stroke="var(--bearish)" stroke-width="2.5" />
        <rect x="30" y="120" width="40" height="28" rx="2" fill="var(--bearish-bg)" stroke="var(--bearish)" stroke-width="2.5" />
        <line x1="50" y1="148" x2="50" y2="155" stroke="var(--bearish)" stroke-width="2" />
        <text x="50" y="195" fill="var(--bearish)" font-size="12" font-weight="700" text-anchor="middle">SHOOTING STAR</text>
        <text x="50" y="210" fill="var(--text-muted)" font-size="10" text-anchor="middle">Long upper wick (Rejection)</text>
      </g>
    </svg>
  `,

  // SVG for Support & Resistance + Breakout & Retest
  supportResistance: () => `
    <svg viewBox="0 0 540 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 250px;">
      <!-- Resistance Line -->
      <line x1="30" y1="75" x2="510" y2="75" stroke="var(--bearish)" stroke-width="2" stroke-dasharray="6 4" />
      <text x="40" y="65" fill="var(--bearish)" font-size="12" font-weight="700">RESISTANCE LEVEL (Ceiling)</text>
      
      <!-- Support Line -->
      <line x1="30" y1="185" x2="510" y2="185" stroke="var(--bullish)" stroke-width="2" stroke-dasharray="6 4" />
      <text x="40" y="205" fill="var(--bullish)" font-size="12" font-weight="700">SUPPORT LEVEL (Floor)</text>

      <!-- Price Path Bouncing Between S & R, then Breaking out and Retesting -->
      <path d="M 50 180 Q 90 75 130 80 Q 170 185 210 180 Q 250 80 290 78 Q 320 180 340 180 L 390 35 L 430 75 L 490 25" 
            stroke="var(--accent-primary)" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      
      <!-- Bounce Nodes -->
      <circle cx="130" cy="80" r="5" fill="var(--bearish)" />
      <circle cx="210" cy="180" r="5" fill="var(--bullish)" />
      <circle cx="290" cy="78" r="5" fill="var(--bearish)" />
      <circle cx="340" cy="180" r="5" fill="var(--bullish)" />
      
      <!-- Breakout annotation -->
      <circle cx="365" cy="75" r="7" stroke="var(--accent-teal)" stroke-width="2" fill="none" />
      <text x="350" y="55" fill="var(--accent-teal)" font-size="11" font-weight="700">BREAKOUT</text>
      
      <!-- Retest node -->
      <circle cx="430" cy="75" r="6" fill="var(--bullish)" />
      <text x="410" y="100" fill="var(--bullish)" font-size="11" font-weight="700">ROLE REVERSAL (Retest)</text>
      <text x="410" y="115" fill="var(--text-muted)" font-size="10">Former Resistance becomes Support</text>
    </svg>
  `,

  // SVG for Supply & Demand Zones
  supplyDemand: () => `
    <svg viewBox="0 0 540 250" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 240px;">
      <!-- Supply Zone -->
      <rect x="40" y="30" width="460" height="40" fill="var(--bearish-bg)" stroke="var(--bearish)" stroke-dasharray="4 2" rx="4" />
      <text x="55" y="55" fill="var(--bearish)" font-size="12" font-weight="700">SUPPLY ZONE (Imbalance: Aggressive Sellers)</text>

      <!-- Demand Zone -->
      <rect x="40" y="180" width="460" height="40" fill="var(--bullish-bg)" stroke="var(--bullish)" stroke-dasharray="4 2" rx="4" />
      <text x="55" y="205" fill="var(--bullish)" font-size="12" font-weight="700">DEMAND ZONE (Imbalance: Aggressive Buyers)</text>

      <!-- Price Movement: Drop - Base - Rally / Rally - Base - Drop -->
      <path d="M 60 120 L 120 185 L 170 190 L 230 45 L 290 48 L 350 185 L 420 180 L 480 80" 
            stroke="var(--accent-secondary)" stroke-width="3" fill="none" stroke-linecap="round" />
      
      <text x="145" y="235" fill="var(--text-muted)" font-size="10" text-anchor="middle">Base Formation</text>
      <text x="280" y="18" fill="var(--text-muted)" font-size="10" text-anchor="middle">Departure</text>
      <text x="430" y="235" fill="var(--accent-teal)" font-size="10" font-weight="600" text-anchor="middle">Fresh Zone Mitigation</text>
    </svg>
  `,

  // SVG for Market Structure: HH, HL, LH, LL, BOS & CHOCH
  marketStructure: () => `
    <svg viewBox="0 0 540 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 250px;">
      <!-- Uptrend price line -->
      <path d="M 40 210 L 100 130 L 140 170 L 220 70 L 260 120 L 350 40 L 400 150 L 440 100 L 500 220" 
            stroke="var(--accent-primary)" stroke-width="3" fill="none" stroke-linecap="round" />

      <!-- Swing Points -->
      <!-- Low -->
      <circle cx="40" cy="210" r="4" fill="var(--text-muted)" />
      <!-- High 1 -->
      <circle cx="100" cy="130" r="5" fill="var(--accent-primary)" />
      <text x="100" y="115" fill="var(--text-primary)" font-size="11" font-weight="700" text-anchor="middle">H</text>

      <!-- Higher Low 1 -->
      <circle cx="140" cy="170" r="5" fill="var(--bullish)" />
      <text x="140" y="195" fill="var(--bullish)" font-size="11" font-weight="700" text-anchor="middle">HL</text>

      <!-- Higher High 1 -->
      <circle cx="220" cy="70" r="5" fill="var(--accent-primary)" />
      <text x="220" y="55" fill="var(--text-primary)" font-size="11" font-weight="700" text-anchor="middle">HH</text>

      <!-- BOS Line 1 -->
      <line x1="100" y1="130" x2="220" y2="130" stroke="var(--accent-teal)" stroke-dasharray="3 3" stroke-width="1.5" />
      <text x="160" y="125" fill="var(--accent-teal)" font-size="10" font-weight="700">BOS (Break of Structure)</text>

      <!-- Higher Low 2 -->
      <circle cx="260" cy="120" r="5" fill="var(--bullish)" />
      <text x="260" y="145" fill="var(--bullish)" font-size="11" font-weight="700" text-anchor="middle">HL</text>

      <!-- Higher High 2 -->
      <circle cx="350" cy="40" r="5" fill="var(--accent-primary)" />
      <text x="350" y="25" fill="var(--text-primary)" font-size="11" font-weight="700" text-anchor="middle">HH</text>

      <!-- CHOCH Line (Broken last HL) -->
      <line x1="260" y1="120" x2="410" y2="120" stroke="var(--bearish)" stroke-dasharray="4 2" stroke-width="1.5" />
      <text x="310" y="112" fill="var(--bearish)" font-size="10" font-weight="700">CHOCH (Change of Character)</text>

      <!-- Lower High & Lower Low -->
      <circle cx="440" cy="100" r="5" fill="var(--bearish)" />
      <text x="440" y="85" fill="var(--bearish)" font-size="11" font-weight="700" text-anchor="middle">LH</text>

      <circle cx="500" cy="220" r="5" fill="var(--bearish)" />
      <text x="500" y="240" fill="var(--bearish)" font-size="11" font-weight="700" text-anchor="middle">LL</text>
    </svg>
  `,

  // SVG for Liquidity Sweep & Stop Runs
  liquiditySweep: () => `
    <svg viewBox="0 0 540 250" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 240px;">
      <!-- Equal Highs Level -->
      <line x1="40" y1="80" x2="480" y2="80" stroke="var(--warning)" stroke-width="2" stroke-dasharray="5 3" />
      <text x="50" y="70" fill="var(--warning)" font-size="12" font-weight="700">EQH — BUY-SIDE LIQUIDITY (Resting Buy Stops)</text>

      <!-- Price Path Forming Equal Highs -->
      <path d="M 60 190 L 120 82 L 170 140 L 230 82 L 280 150 L 330 82 L 350 45 L 370 190 L 450 220" 
            stroke="var(--accent-primary)" stroke-width="3" fill="none" stroke-linecap="round" />

      <!-- Equal High Nodes -->
      <circle cx="120" cy="82" r="5" fill="var(--warning)" />
      <circle cx="230" cy="82" r="5" fill="var(--warning)" />
      <circle cx="330" cy="82" r="5" fill="var(--warning)" />

      <!-- Sweep Wick (The False Breakout) -->
      <line x1="350" y1="80" x2="350" y2="45" stroke="var(--bearish)" stroke-width="4" stroke-linecap="round" />
      <circle cx="350" cy="45" r="5" fill="var(--bearish)" />
      <text x="365" y="50" fill="var(--bearish)" font-size="11" font-weight="700">LIQUIDITY PURGE / SWEEP</text>
      <text x="365" y="65" fill="var(--text-muted)" font-size="10">Orders triggered, price quickly reverses down</text>

      <!-- Displacement Downward -->
      <path d="M 370 190 L 450 220" stroke="var(--bearish)" stroke-width="4" />
      <text x="420" y="195" fill="var(--bearish)" font-size="11" font-weight="600">Displacement Down</text>
    </svg>
  `,

  // SVG for Order Blocks and Fair Value Gaps (FVG)
  orderBlockFVG: () => `
    <svg viewBox="0 0 540 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 250px;">
      <!-- Candle 1 -->
      <line x1="120" y1="110" x2="120" y2="210" stroke="var(--bullish)" stroke-width="2" />
      <rect x="105" y="140" width="30" height="50" rx="3" fill="var(--bullish-bg)" stroke="var(--bullish)" stroke-width="2" />

      <!-- Candle 2: Big Displacement Candle -->
      <line x1="200" y1="40" x2="200" y2="210" stroke="var(--bullish)" stroke-width="2" />
      <rect x="180" y="60" width="40" height="130" rx="3" fill="var(--bullish)" stroke="var(--bullish)" stroke-width="2" />

      <!-- Candle 3 -->
      <line x1="280" y1="20" x2="280" y2="120" stroke="var(--bullish)" stroke-width="2" />
      <rect x="265" y="30" width="30" height="60" rx="3" fill="var(--bullish-bg)" stroke="var(--bullish)" stroke-width="2" />

      <!-- FVG Box (Gap between Candle 1 High and Candle 3 Low) -->
      <rect x="120" y="90" width="320" height="50" fill="rgba(20, 184, 166, 0.15)" stroke="var(--accent-teal)" stroke-dasharray="4 2" rx="4" />
      <text x="320" y="112" fill="var(--accent-teal)" font-size="11" font-weight="700">FAIR VALUE GAP (FVG / Imbalance)</text>
      <text x="320" y="128" fill="var(--text-muted)" font-size="10">Unmitigated price imbalance between wick 1 & wick 3</text>

      <!-- Order Block (Prior Bearish Candle before displacement) -->
      <rect x="40" y="160" width="30" height="40" rx="3" fill="var(--bearish-bg)" stroke="var(--bearish)" stroke-width="2" />
      <line x1="55" y1="150" x2="55" y2="210" stroke="var(--bearish)" stroke-width="1.5" />
      <rect x="40" y="160" width="420" height="40" fill="rgba(59, 130, 246, 0.08)" stroke="var(--accent-primary)" stroke-dasharray="3 3" rx="4" />
      <text x="80" y="185" fill="var(--accent-primary)" font-size="11" font-weight="700">BULLISH ORDER BLOCK (OB)</text>
    </svg>
  `,

  // SVG for Fibonacci Retracement & Golden Pocket
  fibonacciRetracement: () => `
    <svg viewBox="0 0 540 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 250px;">
      <!-- Fibonacci Levels -->
      <!-- 0% (Swing High) -->
      <line x1="60" y1="40" x2="480" y2="40" stroke="var(--text-primary)" stroke-width="1.5" />
      <text x="70" y="32" fill="var(--text-primary)" font-size="11" font-weight="700">0.0% — Swing High (Peak)</text>

      <!-- 23.6% -->
      <line x1="60" y1="75" x2="480" y2="75" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="3 3" />
      <text x="70" y="70" fill="var(--text-muted)" font-size="10">23.6% Level</text>

      <!-- 38.2% -->
      <line x1="60" y1="105" x2="480" y2="105" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="3 3" />
      <text x="70" y="100" fill="var(--text-muted)" font-size="10">38.2% Level (Shallow Pullback)</text>

      <!-- 50% -->
      <line x1="60" y1="135" x2="480" y2="135" stroke="var(--accent-primary)" stroke-width="1.5" stroke-dasharray="4 2" />
      <text x="70" y="130" fill="var(--accent-primary)" font-size="10" font-weight="600">50.0% Equilibrium</text>

      <!-- 61.8% to 66.6% Golden Pocket -->
      <rect x="60" y="155" width="420" height="25" fill="rgba(245, 158, 11, 0.18)" stroke="var(--warning)" stroke-width="1" rx="3" />
      <line x1="60" y1="160" x2="480" y2="160" stroke="var(--warning)" stroke-width="1.5" />
      <text x="70" y="172" fill="var(--warning)" font-size="11" font-weight="700">61.8% - 66.6% GOLDEN POCKET</text>

      <!-- 100% (Swing Low) -->
      <line x1="60" y1="230" x2="480" y2="230" stroke="var(--text-primary)" stroke-width="1.5" />
      <text x="70" y="222" fill="var(--text-primary)" font-size="11" font-weight="700">100.0% — Swing Low (Origin)</text>

      <!-- Price Path Bouncing into Golden Pocket -->
      <path d="M 80 230 L 220 40 L 310 168 L 440 60" 
            stroke="var(--accent-teal)" stroke-width="3" fill="none" stroke-linecap="round" />
      <circle cx="220" cy="40" r="5" fill="var(--accent-primary)" />
      <circle cx="310" cy="168" r="6" fill="var(--warning)" />
      <text x="325" y="195" fill="var(--warning)" font-size="10" font-weight="700">High-Probability Reaction</text>
    </svg>
  `
};

const AcademyCourses = [
  {
    id: "course-1",
    title: "Candlestick Foundations",
    shortDesc: "Master the fundamental visual building block of technical analysis: anatomy, wicks, and market sentiment.",
    difficulty: "Beginner",
    category: "Foundations",
    duration: "45 min",
    svgPreview: ChartDiagrams.candleAnatomy,
    chapters: [
      {
        id: 1,
        title: "Introduction to Candlesticks",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "A candlestick chart displays the market's high, low, open, and close prices for a specific timeframe. Originally developed by 18th-century Japanese rice traders, candlesticks offer a superior visual representation of supply and demand battlegrounds compared to simple line charts.",
        diagram: ChartDiagrams.candleAnatomy,
        deepDive: [
          "Candlesticks transform raw price data into an intuitive psychological snapshot.",
          "Every candlestick represents a fixed duration of time (e.g., 5-minute, 1-hour, or 1-day).",
          "Color coding immediately indicates whether buyers or sellers were in control by the end of that period."
        ],
        takeaways: [
          "Candlesticks show four key price points: Open, High, Low, and Close.",
          "The colored rectangle represents the real body; the thin lines are wicks or shadows.",
          "Green/Hollow candles indicate bullish closes; Red/Filled candles indicate bearish closes."
        ],
        commonMistakes: "Relying on a single candlestick in isolation without understanding the broader market context or higher timeframe direction.",
        quiz: {
          question: "What does the upper wick of a candlestick represent?",
          options: [
            "The opening price of that timeframe",
            "The highest price traded during that period",
            "The average volume of contracts exchanged",
            "The closing price of the session"
          ],
          correctIndex: 1,
          explanation: "The tip of the upper wick represents the highest price reached during the duration of that candle before sellers forced it back down."
        }
      },
      {
        id: 2,
        title: "Anatomy of a Candle",
        duration: "7 min",
        difficulty: "Beginner",
        concept: "Each candlestick consists of two primary components: the Real Body and the Shadows (Wicks). Understanding their proportions reveals whether buyers or sellers exercised dominance.",
        diagram: ChartDiagrams.candleAnatomy,
        deepDive: [
          "The distance between Open and Close forms the 'Real Body'.",
          "The Upper Shadow extends from the top of the body to the absolute high.",
          "The Lower Shadow extends from the bottom of the body to the absolute low."
        ],
        takeaways: [
          "A tall body denotes strong directional conviction and momentum.",
          "Long wicks indicate rejection and price sensitivity at extreme levels.",
          "Very small bodies reveal market indecision or equilibrium between buyers and sellers."
        ],
        commonMistakes: "Ignoring wicks. Wicks are historical footprints where aggressive counter-orders entered the market.",
        quiz: {
          question: "If a candle has a very large real body with minimal wicks, what does this indicate?",
          options: [
            "Severe market indecision",
            "Low liquidity and lack of interest",
            "Strong directional conviction with little pushback",
            "An imminent market holiday"
          ],
          correctIndex: 2,
          explanation: "A large real body with tiny wicks shows one party (buyers or sellers) maintained decisive control from open to close."
        }
      },
      {
        id: 3,
        title: "Bullish and Bearish Candles",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "When the closing price is higher than the opening price, the candle is Bullish. When the closing price is lower than the opening price, the candle is Bearish.",
        diagram: ChartDiagrams.candleAnatomy,
        deepDive: [
          "Bullish: Close > Open (often colored Green or Teal in modern educational software).",
          "Bearish: Close < Open (often colored Red or Coral).",
          "The size of the spread between Open and Close reflects net progress during the interval."
        ],
        takeaways: [
          "A bullish candle indicates net buying pressure won the period.",
          "A bearish candle indicates net selling pressure drove the close lower.",
          "Color is simply a visual cue for the mathematical relationship: Close vs Open."
        ],
        commonMistakes: "Assuming every green candle implies an automatic upward trend, ignoring key resistance levels.",
        quiz: {
          question: "A candle opens at $100 and closes at $92. What type of candle is this?",
          options: ["Bullish Candle", "Bearish Candle", "Neutral Doji", "Breakout Candle"],
          correctIndex: 1,
          explanation: "Because the closing price ($92) is below the opening price ($100), it is a bearish candle."
        }
      },
      {
        id: 4,
        title: "Body and Wick Analysis",
        duration: "7 min",
        difficulty: "Beginner",
        concept: "The ratio between the body size and wick length provides insights into market psychology and order flow equilibrium.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: [
          "Long lower wick = Buyers rejected lower prices.",
          "Long upper wick = Sellers rejected higher prices.",
          "Balanced wicks with tiny body = Pure market standoff."
        ],
        takeaways: [
          "Wicks show where liquidity was tested and rejected.",
          "Bodies represent the undisputed consensus established by the close.",
          "Context matters: a rejection wick at a key level is significantly more meaningful than in the middle of a range."
        ],
        commonMistakes: "Treating wicks identically regardless of where they appear on the chart.",
        quiz: {
          question: "What does a long lower wick on a candle tell us about the session's action?",
          options: [
            "Sellers were in complete control until the very end",
            "Buyers aggressively pushed price back up after sellers explored lower prices",
            "The market was closed for most of the period",
            "Trading volume was nonexistent"
          ],
          correctIndex: 1,
          explanation: "Sellers drove price down to form the low, but buyers stepped in with sufficient force to bid price back up toward the top."
        }
      },
      {
        id: 5,
        title: "Open, High, Low, Close (OHLC)",
        duration: "5 min",
        difficulty: "Beginner",
        concept: "OHLC is the standardized data format across all financial analysis. Understanding how these 4 points interact lets you deconstruct any chart without visual indicators.",
        diagram: ChartDiagrams.candleAnatomy,
        deepDive: [
          "Open: The first transaction price recorded.",
          "High: The absolute peak price achieved.",
          "Low: The absolute lowest price recorded.",
          "Close: The final settled transaction price."
        ],
        takeaways: [
          "High and Low represent the session's total boundaries.",
          "The close is generally considered the most critical price point by institutional participants.",
          "Higher timeframe closes confirm valid breakouts."
        ],
        commonMistakes: "Executing trades before the candle has actually closed, getting trapped in mid-session volatility.",
        quiz: {
          question: "Which of the four price points is typically considered the most significant for confirming signals?",
          options: ["The Open", "The High", "The Close", "The Low"],
          correctIndex: 2,
          explanation: "The Close represents the final settlement and consensus of that timeframe, confirming whether a level was genuinely defended."
        }
      },
      {
        id: 6,
        title: "Candle Strength & Momentum",
        duration: "7 min",
        difficulty: "Beginner",
        concept: "Candle strength is evaluated by how close the closing price is to the absolute high (for bullish candles) or absolute low (for bearish candles).",
        diagram: ChartDiagrams.candleAnatomy,
        deepDive: [
          "Maximum Bullish Strength: Close equals the High (Marubozu candle).",
          "Maximum Bearish Strength: Close equals the Low.",
          "Diminishing candle sizes indicate fading momentum."
        ],
        takeaways: [
          "Wide-range candles closing near extremes display peak institutional momentum.",
          "Progressively smaller bodies often signal consolidation or potential exhaustion.",
          "Sudden huge candles into major resistance often represent climax exhausts rather than sustainable breaks."
        ],
        commonMistakes: "Chasing a candle after a massive 300% extension right as it meets opposing supply.",
        quiz: {
          question: "What is a candle called that opens at its low and closes directly at its high with virtually no wicks?",
          options: ["A Doji", "A Marubozu", "A Spinning Top", "A Harami"],
          correctIndex: 1,
          explanation: "A Marubozu is a candle with a solid full body and little to no wick, signifying absolute unilateral momentum."
        }
      },
      {
        id: 7,
        title: "Reading Market Sentiment",
        duration: "7 min",
        difficulty: "Beginner",
        concept: "By reading sequences of candles rather than isolated ones, you observe real-time narrative shifts between buyer eagerness and seller urgency.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: [
          "Consecutive higher closes indicate persistent demand.",
          "Inability to create new highs despite green candles indicates buyer exhaustion.",
          "Candle overlap indicates ranging, non-trending market behavior."
        ],
        takeaways: [
          "Candles are a language of collective human sentiment and algorithmic execution.",
          "Watch how price reacts when encountering prior highs and lows.",
          "Always evaluate the background trend before interpreting candle sentiment."
        ],
        commonMistakes: "Thinking that reading candlesticks predicts the future with certainty. They only indicate probabilistic imbalances.",
        quiz: {
          question: "When three consecutive candles show overlapping bodies and long wicks in both directions, what is the market expressing?",
          options: [
            "Hyper-aggressive trend continuation",
            "Equilibrium, consolidation, or indecision",
            "Immediate market collapse",
            "A guarantee of higher prices"
          ],
          correctIndex: 1,
          explanation: "Overlapping candles with opposing wicks signify equilibrium where neither buyers nor sellers hold decisive directional control."
        }
      }
    ]
  },
  {
    id: "course-2",
    title: "Candlestick Patterns",
    shortDesc: "Recognize classic high-probability single and multi-candle formations including Dojis, Hammers, and Engulfing patterns.",
    difficulty: "Beginner",
    category: "Foundations",
    duration: "60 min",
    svgPreview: ChartDiagrams.candlestickPatterns,
    chapters: [
      {
        id: 1,
        title: "Single Candle Patterns",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "Single candlestick patterns are standalone candles whose shape signals potential continuation, indecision, or impending reversal.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: ["Focus on body-to-wick proportions.", "Evaluate location on the chart.", "A single candle needs confirmation on the next bar."],
        takeaways: ["Location is 90% of the pattern's validity.", "Never trade a single candle pattern in isolation."],
        commonMistakes: "Trading reversal candles in the dead middle of a choppy range.",
        quiz: {
          question: "What is the most critical factor when evaluating a single candlestick pattern?",
          options: ["The color of your trading chart background", "Its location relative to key support, resistance, or trend", "The broker you are using", "The speed of your internet"],
          correctIndex: 1,
          explanation: "Location is paramount: a reversal candle is meaningless in no-man's land, but highly potent at major structural levels."
        }
      },
      {
        id: 2,
        title: "Doji: The Sign of Equilibrium",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "A Doji occurs when the open and close are virtually equal. It demonstrates complete parity between buyers and sellers.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: ["Standard Doji has centered wicks.", "Long-legged Doji shows intense two-way volatility with no resolution."],
        takeaways: ["A Doji reflects transition, not an automatic guarantee of reversal.", "Wait for the following candle to confirm direction."],
        commonMistakes: "Shorting immediately upon seeing a Doji in a roaring bull market without confirmation.",
        quiz: {
          question: "What defines a Doji candle?",
          options: ["A massive real body", "Open and Close prices are identical or nearly identical", "No wicks at all", "Always red in color"],
          correctIndex: 1,
          explanation: "A Doji forms when price travels throughout the session but settles right back where it opened."
        }
      },
      {
        id: 3,
        title: "The Hammer (Bullish Reversal)",
        duration: "7 min",
        difficulty: "Beginner",
        concept: "The Hammer has a small body near the top and a long lower shadow at least twice the length of the body, indicating lower price rejection.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: ["Forms at the bottom of a downtrend.", "Sellers pushed down, but aggressive buyers absorbed supply and pushed price back up."],
        takeaways: ["Lower wick must be at least 2x the body length.", "Little or no upper wick.", "Strongest when it hits key support."],
        commonMistakes: "Calling a hammer when it appears at the top of an uptrend (that is a Hanging Man).",
        quiz: {
          question: "What must be the minimum proportion of the lower wick relative to the body in a valid Hammer?",
          options: ["Equal length", "At least twice the height of the real body", "Half the body height", "Three times the upper wick"],
          correctIndex: 1,
          explanation: "Standard technical criteria requires the lower shadow to be at least 2 times the length of the real body."
        }
      },
      {
        id: 4,
        title: "Shooting Star (Bearish Reversal)",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "The inverse of a Hammer: occurs at the peak of an uptrend with a long upper wick and small body near the low.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: ["Buyers tried to push to fresh highs, but sellers overwhelmed them.", "Indicates overhead supply pressure."],
        takeaways: ["Upper shadow at least 2x body.", "Color can be green or red, but red (bearish close) has stronger edge."],
        commonMistakes: "Entering short while the candle is still open and forming.",
        quiz: {
          question: "Where must a Shooting Star form to be considered an actionable bearish pattern?",
          options: ["At the bottom of a deep downtrend", "After an established upward rally into resistance", "Inside a tight sideways consolidation", "During market pre-open"],
          correctIndex: 1,
          explanation: "A shooting star is a top-reversal pattern; it requires a preceding uptrend or rally to exhaust."
        }
      },
      {
        id: 5,
        title: "Engulfing Patterns (Bullish & Bearish)",
        duration: "7 min",
        difficulty: "Beginner",
        concept: "A two-candle pattern where the body of the second candle completely wraps around or 'engulfs' the entire body of the previous candle.",
        diagram: ChartDiagrams.candleAnatomy,
        deepDive: ["Bullish Engulfing: large green body engulfs prior small red body.", "Bearish Engulfing: large red body engulfs prior small green body."],
        takeaways: ["Demonstrates an abrupt, definitive shift in power.", "Higher volume on the engulfing candle adds substantial confluence."],
        commonMistakes: "Failing to check if the engulfing candle body actually covers the prior body.",
        quiz: {
          question: "In a valid Bullish Engulfing pattern, what must the second candle do?",
          options: ["Have a lower low and lower close", "Completely engulf the real body of the preceding bearish candle", "Form a tiny Doji", "Match the high exactly"],
          correctIndex: 1,
          explanation: "The second candle must have a green body that completely covers the real body of the previous red candle."
        }
      },
      {
        id: 6,
        title: "Morning Star (Three-Candle Reversal)",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "A three-candle bottom reversal: (1) Long bearish candle, (2) Small indecision candle gapping lower, (3) Strong bullish candle closing deep into candle 1.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: ["Visualizes bear dominance -> hesitation -> bull takeover.", "Third candle must close above the 50% midpoint of the first candle."],
        takeaways: ["Highly respected multi-candle reversal.", "Shows exhaustion followed by decisive displacement."],
        commonMistakes: "Entering if the third candle fails to penetrate at least halfway up the first candle.",
        quiz: {
          question: "How far into the first bearish candle should the third candle close in a valid Morning Star?",
          options: ["At least 50% into the body of the first candle", "Only 10%", "It must close below candle 1", "It doesn't matter"],
          correctIndex: 0,
          explanation: "A reliable Morning Star requires the third candle to close beyond the 50% midpoint of the first candle."
        }
      },
      {
        id: 7,
        title: "Evening Star (Three-Candle Bearish Reversal)",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "The bearish counterpart to the Morning Star, signaling the exhaustion of an uptrend at market tops.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: ["Candle 1: Tall Bullish bar.", "Candle 2: Small body star.", "Candle 3: Heavy bearish close breaking below midpoint of bar 1."],
        takeaways: ["Psychologically marks the abandonment of bull optimism.", "Provides clear invalidation level above the middle star."],
        commonMistakes: "Setting stop losses below the pattern instead of above the highest star wick.",
        quiz: {
          question: "Where is the logical invalidation point (stop loss) for an Evening Star setup?",
          options: ["At the low of the first green candle", "Above the high of the middle star candle", "At the open of the third candle", "Any random number"],
          correctIndex: 1,
          explanation: "If price trades above the peak of the middle star candle, the bearish reversal hypothesis is completely invalidated."
        }
      },
      {
        id: 8,
        title: "Inside Bar (Compression & Breakout)",
        duration: "5 min",
        difficulty: "Beginner",
        concept: "An Inside Bar is completely contained within the High and Low range of the preceding bar (the Mother Bar). It signifies price contraction.",
        diagram: ChartDiagrams.candlestickPatterns,
        deepDive: ["Reflects volatility contraction before an expansion.", "Can break out in either trend continuation or reversal direction."],
        takeaways: ["Inside bars precede explosive volatility.", "Trade the break of the mother bar's boundary with momentum."],
        commonMistakes: "Guessing the breakout direction before the mother bar's high or low is actually breached.",
        quiz: {
          question: "What defines an Inside Bar?",
          options: ["It has a higher high and lower low than the prior bar", "Its entire high-to-low range is within the high and low of the prior candle", "It only occurs inside market trading hours", "It has no body"],
          correctIndex: 1,
          explanation: "An Inside Bar's High is lower than the previous high, and its Low is higher than the previous low."
        }
      },
      {
        id: 9,
        title: "Pattern Confirmation Techniques",
        duration: "5 min",
        difficulty: "Beginner",
        concept: "Never trade a pattern blindly. Professional technical analysts use multi-step confirmation: support/resistance confluence, volume, and close verification.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Wait for candle close.", "Check higher timeframe bias.", "Align with horizontal structural levels."],
        takeaways: ["Confirmation filters out over 60% of false signals.", "Patience is a measurable edge in technical analysis."],
        commonMistakes: "Flipping positions every 5 minutes based on unconfirmed candle shapes on 1-minute charts.",
        quiz: {
          question: "Which of the following creates the highest probability setup for a bullish pattern?",
          options: ["Occurring at random mid-range prices", "Confluence with major horizontal support and higher timeframe trend", "Trading with maximum leverage", "Trading during news announcements"],
          correctIndex: 1,
          explanation: "Confluence—multiple independent technical tools pointing to the exact same price area—creates high-probability setups."
        }
      },
      {
        id: 10,
        title: "Common Candlestick Pitfalls",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "Unpack why beginner traders lose money relying solely on candlestick shapes and how to fix your analytical framework.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Candlestick patterns are triggers, not full trading systems.", "Without risk-to-reward calculation and invalidation, patterns fail."],
        takeaways: ["Risk management determines longevity, not pattern memorization.", "Look at market structure first, patterns second."],
        commonMistakes: "Believing technical analysis provides 100% certainty. It is strictly a game of probabilistic edge.",
        quiz: {
          question: "Why do textbook candlestick patterns frequently fail on live charts?",
          options: ["The charts are manipulated by brokers", "They are taken without structural context, trend alignment, or volume", "Candlesticks are outdated", "Math doesn't work in trading"],
          correctIndex: 1,
          explanation: "Candlestick patterns without market structure context are just random price noise."
        }
      }
    ]
  },
  {
    id: "course-3",
    title: "Support & Resistance",
    shortDesc: "Understand horizontal price memory, role reversal, breakout confirmation, and false breakouts.",
    difficulty: "Beginner → Intermediate",
    category: "Structure",
    duration: "65 min",
    svgPreview: ChartDiagrams.supportResistance,
    chapters: [
      {
        id: 1,
        title: "Understanding Support",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "Support is a price level where buying interest is strong enough to overcome selling pressure, temporarily pausing or reversing a downward decline.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Acts like a price floor.", "Traders with buy limit orders and short-sellers taking profits cluster around these zones."],
        takeaways: ["Support is a zone, not an exact single penny.", "Created by market memory from previous demand reactions."],
        commonMistakes: "Drawing support as a razor-thin 1-pixel line and panic-selling on a 2-cent breach.",
        quiz: {
          question: "What is Support in technical analysis?",
          options: ["A ceiling where sellers dominate", "A price zone where buying demand historically overcomes selling pressure", "A fee paid to trading software", "A guaranteed bounce line"],
          correctIndex: 1,
          explanation: "Support acts as a demand zone where buyers historically step in to halt further price declines."
        }
      },
      {
        id: 2,
        title: "Understanding Resistance",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "Resistance is a price level where selling interest is sufficiently strong to overcome buying demand, acting like a ceiling on price advances.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Sellers look to enter, and buyers look to realize profits.", "Consecutive failed tests reinforce the resistance zone."],
        takeaways: ["Resistance marks where supply outweighs demand.", "The more times tested within a short period, the weaker it may become."],
        commonMistakes: "Assuming resistance can never be broken.",
        quiz: {
          question: "What market behavior creates a Resistance level?",
          options: ["An influx of buyers willing to pay any price", "Sellers distributing inventory and buyers taking profits", "Exchange server maintenance", "Zero trading interest"],
          correctIndex: 1,
          explanation: "Resistance is created when sellers supply enough volume to absorb all incoming buyer bids."
        }
      },
      {
        id: 3,
        title: "Horizontal Levels vs Diagonal Trendlines",
        duration: "6 min",
        difficulty: "Beginner",
        concept: "Compare why horizontal levels carry much greater historical weight and objective consensus than subjective diagonal trendlines.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Every trader sees the exact same horizontal high/low price.", "Diagonal trendlines vary widely depending on log vs arithmetic scales."],
        takeaways: ["Horizontal levels represent absolute price memory.", "Use diagonals as secondary guides, not primary anchors."],
        commonMistakes: "Drawing 30 diagonal lines across the screen until the chart is completely unreadable.",
        quiz: {
          question: "Why do horizontal levels generally hold higher validity than diagonal trendlines?",
          options: ["They are harder to draw", "They represent objective absolute prices shared by all institutional order books", "They only work on crypto", "They were invented first"],
          correctIndex: 1,
          explanation: "A horizontal price of $150.00 is identical for every market participant worldwide, eliminating subjective charting errors."
        }
      },
      {
        id: 4,
        title: "Multiple Touches & Zone Testing",
        duration: "7 min",
        difficulty: "Intermediate",
        concept: "Traditional retail theory says more touches equal stronger levels; modern institutional liquidity theory proves repeated rapid touches actually deplete standing orders.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["First 1-2 touches are prime reactions.", "Touches 4, 5, and 6 usually signal a breakout is imminent as resting orders are eaten up."],
        takeaways: ["Fresh levels offer the cleanest bounces.", "Repeated hammering against a level weakens the barrier."],
        commonMistakes: "Blindly buying the 6th retest of a support level thinking it's unbreakable.",
        quiz: {
          question: "What happens to resting limit orders when a level is tested repeatedly in a short timeframe?",
          options: ["The orders multiply indefinitely", "The resting limit orders get filled and depleted, weakening the barrier", "The exchange cancels the market", "Nothing changes"],
          correctIndex: 1,
          explanation: "Each touch consumes standing limit orders; once depleted, price easily breaks through."
        }
      },
      {
        id: 5,
        title: "Strong vs Weak Levels",
        duration: "7 min",
        difficulty: "Intermediate",
        concept: "Distinguish between high-conviction structural levels that generated sharp aggressive departures and weak minor levels that price sliced through with ease.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Strong levels caused large impulsive moves or higher timeframe trend shifts.", "Weak levels caused minor shallow retracements."],
        takeaways: ["Focus your trading exclusively around major higher-timeframe boundaries.", "Filter out noisy intraday minor swing points."],
        commonMistakes: "Treating a 1-minute pivot with the same importance as a Daily support level.",
        quiz: {
          question: "Which of the following denotes a high-conviction Strong Support level?",
          options: ["A level that price drifted through sideways", "A level from which price previously launched an aggressive multi-day rally", "A level created 2 minutes ago", "Any level below $10"],
          correctIndex: 1,
          explanation: "Aggressive departure velocity proves significant institutional order volume was executed at that origin."
        }
      },
      {
        id: 6,
        title: "Role Reversal (Support Becomes Resistance)",
        duration: "7 min",
        difficulty: "Intermediate",
        concept: "Once broken, a support level frequently flips to become future resistance, and broken resistance becomes future support. This is the cornerstone of structural trading.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Trapped buyers at former support seek to exit at breakeven when price rallies back up.", "Breakout traders enter on the retest."],
        takeaways: ["Role reversal provides the lowest-risk entry opportunities.", "Confirms market acceptance of the new price regime."],
        commonMistakes: "Expecting support to hold forever even after price decisively closes beneath it.",
        quiz: {
          question: "What is Role Reversal in technical analysis?",
          options: ["Switching brokers during a trade", "A former support level converting into a resistance ceiling after being broken", "A buyer becoming a market maker", "Reversing trade sizes"],
          correctIndex: 1,
          explanation: "Once broken, former support flips into new resistance due to trapped traders seeking breakeven exits."
        }
      },
      {
        id: 7,
        title: "Breakouts: Anatomy of a Valid Break",
        duration: "6 min",
        difficulty: "Intermediate",
        concept: "A true breakout occurs when price moves beyond a defined level with strong volume, wide candle bodies, and a solid close beyond the zone.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Look for displacement: large candle bodies closing outside.", "Avoid trading tiny wicks that immediately recede back inside."],
        takeaways: ["A candle close beyond the level is essential.", "Volume expansion confirms institutional participation."],
        commonMistakes: "Entering on the first tick across the line before the candle has finished forming.",
        quiz: {
          question: "Which element provides strong confirmation of a legitimate breakout?",
          options: ["A tiny wick piercing the level followed by a quick retreat", "A full-bodied candle closing decisively outside the level with high volume", "An unconfirmed tweet", "Low trading volume"],
          correctIndex: 1,
          explanation: "Decisive candle closes beyond the boundary demonstrate acceptance at new price territory."
        }
      },
      {
        id: 8,
        title: "False Breakouts & Bull/Bear Traps",
        duration: "7 min",
        difficulty: "Intermediate",
        concept: "A false breakout (or fakeout) occurs when price briefly breaches a level to trigger breakout orders and stop-losses before reversing swiftly back into the range.",
        diagram: ChartDiagrams.liquiditySweep,
        deepDive: ["Often creates long rejection wicks.", "Traps retail breakout traders off-guard while providing liquidity for counter-trend operators."],
        takeaways: ["False breakouts occur frequently in sideways ranges.", "Wait for a retest confirmation to avoid getting caught in traps."],
        commonMistakes: "Buying market orders at the exact peak of a breakout with stop loss right beneath the breakout line.",
        quiz: {
          question: "What is a 'Bull Trap'?",
          options: ["A legal contract in agriculture", "A false upward breakout that lures in buyers before violently plunging downward", "A guaranteed long setup", "An ETF product"],
          correctIndex: 1,
          explanation: "A Bull Trap entices buyers on a perceived breakout, only for price to collapse and trap their positions at a loss."
        }
      },
      {
        id: 9,
        title: "Retests: The High-Probability Entry",
        duration: "7 min",
        difficulty: "Intermediate",
        concept: "Rather than chasing initial breakouts, patient traders wait for price to pull back and test the broken level for confirmation before entering.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Provides a much tighter, logical stop loss.", "Offers superior Risk-to-Reward ratio."],
        takeaways: ["Never chase a vertical pump.", "If price never retests, let the trade go without FOMO."],
        commonMistakes: "Assuming every breakout will retest. Some aggressive moves take off without retesting.",
        quiz: {
          question: "Why is entering on a retest mathematically advantageous compared to chasing the breakout?",
          options: ["It eliminates all risk", "It allows a much closer invalidation point (stop loss), dramatically improving risk-to-reward", "Brokers charge less commission on retests", "It guarantees a 100% win rate"],
          correctIndex: 1,
          explanation: "Retests allow you to anchor your stop loss right behind the retested structure, keeping risk minimal."
        }
      },
      {
        id: 10,
        title: "Practical Support & Resistance Workflow",
        duration: "7 min",
        difficulty: "Intermediate",
        concept: "A step-by-step institutional routine for charting clean, uncluttered support and resistance zones from the Daily down to execution timeframes.",
        diagram: ChartDiagrams.supportResistance,
        deepDive: ["Step 1: Mark Daily high/low major zones.", "Step 2: Refine on 4H.", "Step 3: Await price arrival on 15m/1H."],
        takeaways: ["Less is more: identify 2-3 key zones, not 20 lines.", "Trade the reaction, not your prediction."],
        commonMistakes: "Cluttering the chart with so many lines that every 50 cents looks like support or resistance.",
        quiz: {
          question: "What is the primary rule for maintaining a professional chart layout?",
          options: ["Draw a line at every single candle high", "Identify only key higher-timeframe inflection zones to maintain clarity and edge", "Change line colors every 10 minutes", "Use at least 15 different indicators"],
          correctIndex: 1,
          explanation: "Clarity breeds discipline. Focusing on 2-3 major higher-timeframe zones prevents analysis paralysis."
        }
      }
    ]
  },
  {
    id: "course-4",
    title: "Supply & Demand",
    shortDesc: "Identify institutional imbalances, fresh zones, base formations, and order flow departures.",
    difficulty: "Intermediate",
    category: "Structure",
    duration: "65 min",
    svgPreview: ChartDiagrams.supplyDemand,
    chapters: [
      { id: 1, title: "Introduction to Supply & Demand", duration: "6 min", difficulty: "Intermediate", concept: "Financial markets move purely based on imbalances between supply (sellers) and demand (buyers). Understanding where large institutional orders could not be completely filled reveals lucrative trading zones.", diagram: ChartDiagrams.supplyDemand, deepDive: ["When large institutions buy, they cannot get all volume filled in one candle.", "Unfilled orders remain resting at the origin base."], takeaways: ["Markets seek equilibrium.", "Zones represent unfulfilled institutional willingness to trade."], commonMistakes: "Treating every support/resistance line as an institutional supply or demand zone.", quiz: { question: "What fundamentally causes price to move violently in one direction?", options: ["A mathematical algorithm error", "An acute imbalance where buy or sell orders overwhelm available counterpart orders", "Trader chat rooms", "Federal holidays"], correctIndex: 1, explanation: "Price moves to discover balance whenever an imbalance between buyers and sellers occurs." } },
      { id: 2, title: "Supply Zones (Rally-Base-Drop & Drop-Base-Drop)", duration: "7 min", difficulty: "Intermediate", concept: "Supply zones are origins of heavy selling. They form via two primary structures: Rally-Base-Drop (reversal) and Drop-Base-Drop (continuation).", diagram: ChartDiagrams.supplyDemand, deepDive: ["The 'Base' is where accumulation/distribution occurred.", "The 'Drop' proves sellers completely dominated."], takeaways: ["Look for fast departures from the base.", "The sharper the exit, the stronger the imbalance."], commonMistakes: "Marking bases that spent 50 candles drifting sideways.", quiz: { question: "What structure forms a reversal supply zone?", options: ["Drop-Base-Rally", "Rally-Base-Drop", "Rally-Base-Rally", "Drop-Base-Drop"], correctIndex: 1, explanation: "Rally-Base-Drop represents price rising, pausing into a base, and dropping violently, creating a supply zone." } },
      { id: 3, title: "Demand Zones (Drop-Base-Rally & Rally-Base-Rally)", duration: "7 min", difficulty: "Intermediate", concept: "Demand zones represent origins of explosive buying interest. Drop-Base-Rally signals reversal demand; Rally-Base-Rally signals continuation demand.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Explosive green candles leaving the base prove institutional buying.", "Resting buy limit orders remain at the base."], takeaways: ["Look for displacement out of the base.", "Candles should have big bodies leaving the zone."], commonMistakes: "Marking demand zones in a steep macro downtrend without confirmation.", quiz: { question: "In a Drop-Base-Rally pattern, what does the 'Base' represent?", options: ["The consolidation where buyers absorbed supply before launching upward", "A permanent market floor", "A place to exit all trades", "Random noise"], correctIndex: 0, explanation: "The base represents the brief consolidation where institutional buy orders absorbed incoming sell pressure." } },
      { id: 4, title: "Fresh vs Mitigated Zones", duration: "6 min", difficulty: "Intermediate", concept: "A Fresh Zone has never been tested since its creation. A Mitigated Zone has already had its resting orders filled by a return touch.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Fresh zones hold the highest probability of reaction.", "Mitigated zones lose potency with each subsequent tap."], takeaways: ["Always prioritize virgin, unmitigated zones.", "A zone touched twice has significantly lower odds."], commonMistakes: "Trading a zone on its 4th retest as if it were still fresh.", quiz: { question: "What is an 'Unmitigated' or 'Fresh' zone?", options: ["A zone created on a brand new day", "A zone that price has not touched since its initial departure", "A zone with green candles only", "A zone verified by an exchange"], correctIndex: 1, explanation: "A fresh zone has not had price revisit it yet, meaning resting institutional limit orders likely remain intact." } },
      { id: 5, title: "Strong vs Weak Zones", duration: "7 min", difficulty: "Intermediate", concept: "Grade your zones based on: departure speed, time spent at the base, and whether the move broke opposing market structure.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Ideal base: 1 to 4 candles.", "Excessive time in base suggests balance, not imbalance.", "Must break previous swing high/low."], takeaways: ["Less time in base = higher imbalance.", "Structure-breaking departures validate institutional power."], commonMistakes: "Drawing zones on long messy consolidations.", quiz: { question: "How many candles ideally form the base of a high-probability supply or demand zone?", options: ["20 to 50 candles", "1 to 4 candles", "Exactly 100 candles", "Zero candles"], correctIndex: 1, explanation: "A brief base of 1 to 4 candles signals that institutional imbalance was so immense price couldn't linger." } },
      { id: 6, title: "Base Formation Anatomy", duration: "6 min", difficulty: "Intermediate", concept: "Explore how to precisely delineate the boundaries of a base using wicks vs bodies for conservative vs aggressive entries.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Conservative: Encompass from highest wick to lowest candle body in base.", "Aggressive: Mark entire wick-to-wick extremes."], takeaways: ["Be consistent in your marking rule.", "Use zone buffer for stop loss placement."], commonMistakes: "Making zones so wide that risk-to-reward becomes unmanageable.", quiz: { question: "Where should an invalidation stop-loss be placed relative to a demand zone?", options: ["Directly in the middle of the zone", "Safely below the absolute lowest point of the demand base", "At the take-profit target", "Anywhere above current price"], correctIndex: 1, explanation: "If price breaches through the bottom of a demand zone, the premise of institutional buying at that origin is invalidated." } },
      { id: 7, title: "Departure Velocity & Volume", duration: "6 min", difficulty: "Intermediate", concept: "The speed and volume at which price leaves a zone is the single greatest evidence of institutional participation.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Slow, sluggish departure = retail interest only.", "Instant wide-spread candles = massive institutional orders."], takeaways: ["Always grade the departure.", "No displacement = low quality zone."], commonMistakes: "Buying a demand zone that barely drifted up 10 cents on its creation.", quiz: { question: "What does an aggressive, vertical departure with large-bodied candles signify?", options: ["Lack of interest", "Institutional volume overwhelming the book", "Market closure", "An error in data"], correctIndex: 1, explanation: "Vertical displacement confirms that an overwhelming one-sided order flow cleared all immediate liquidity." } },
      { id: 8, title: "Zone Validation Rules", duration: "7 min", difficulty: "Intermediate", concept: "A checklist of mandatory requirements before any zone earns the right to be traded.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Rule 1: Must have broken structure.", "Rule 2: Must be fresh.", "Rule 3: Must align with higher timeframe bias."], takeaways: ["A strict checklist eliminates overtrading.", "Discipline beats prediction."], commonMistakes: "Taking trades on unvalidated zones out of boredom.", quiz: { question: "Which rule is most essential for validating an institutional demand zone?", options: ["It must break prior market structure (create a BOS)", "It must be mentioned on social media", "It must occur at 9:30 AM exactly", "It must have 5 touches"], correctIndex: 0, explanation: "Breaking opposing market structure proves that the zone had enough genuine power to conquer existing market boundaries." } },
      { id: 9, title: "Zone Refinement", duration: "6 min", difficulty: "Intermediate", concept: "Refining higher-timeframe zones on lower timeframes to reduce stop-loss size and multiply potential Risk-to-Reward multiples.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Identify Daily demand (e.g. 50 pips).", "Zoom into 1H inside that zone to find the true unmitigated origin (e.g. 15 pips)."], takeaways: ["Increases RR ratio from 1:2 to 1:6+.", "Requires patience as price may front-run ultra-refined zones."], commonMistakes: "Refining down to 1-second charts and constantly missing entries by a fraction.", quiz: { question: "What is the primary benefit of refining a higher-timeframe zone on a lower timeframe?", options: ["It guarantees you will never lose", "It narrows the required stop-loss size, allowing higher risk-to-reward ratios", "It eliminates exchange fees", "It doubles market speed"], correctIndex: 1, explanation: "Refining pinpoints the exact origin of buying, shrinking stop-loss distance and boosting mathematical reward-to-risk." } },
      { id: 10, title: "Practical Supply & Demand Case Studies", duration: "7 min", difficulty: "Intermediate", concept: "Walk through complete historical charting examples analyzing winning setups, invalidations, and trade management.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Real market charts have imperfections.", "Learn to trade what you see, not what you hope."], takeaways: ["Expect losses and cut them swiftly.", "Let high-conviction zones work without micromanaging."], commonMistakes: "Moving stop loss further away when a zone begins to fail.", quiz: { question: "What should you do when price penetrates deeply through your validated demand zone?", options: ["Double your position size to average down", "Accept the invalidation and honor your predetermined stop loss", "Blame the market maker", "Cancel your stop loss"], correctIndex: 1, explanation: "Honoring stop losses without hesitation is what separates professional survivors from blown accounts." } }
    ]
  },
  {
    id: "course-5",
    title: "Market Structure",
    shortDesc: "Master trend mechanics: Swing Highs, Swing Lows, Higher Highs (HH), Higher Lows (HL), BOS, and CHOCH.",
    difficulty: "Intermediate",
    category: "Structure",
    duration: "70 min",
    svgPreview: ChartDiagrams.marketStructure,
    chapters: [
      { id: 1, title: "Understanding Market Structure", duration: "6 min", difficulty: "Intermediate", concept: "Market Structure is the true backbone of all technical analysis. It describes the sequence of peaks and troughs that define an uptrend, downtrend, or consolidation.", diagram: ChartDiagrams.marketStructure, deepDive: ["Prices do not move in straight lines; they move in waves.", "Impulses expand; retracements contract."], takeaways: ["Never trade against confirmed higher-timeframe market structure.", "Structure provides market direction clarity."], commonMistakes: "Looking for reversal entries in strong trending structure.", quiz: { question: "What defines an established Uptrend in classical market structure?", options: ["Series of Lower Lows and Lower Highs", "Series of Higher Highs (HH) and Higher Lows (HL)", "Random choppy movement", "Sideways prices"], correctIndex: 1, explanation: "An uptrend is mathematically defined by consecutive Higher Highs and Higher Lows." } },
      { id: 2, title: "Swing Highs and Swing Lows", duration: "7 min", difficulty: "Intermediate", concept: "Learn to objectively identify valid structural swing points using multi-candle fractal rules rather than subjective visual guesses.", diagram: ChartDiagrams.marketStructure, deepDive: ["A valid Swing High has lower highs on both left and right flanks.", "A valid Swing Low has higher lows on both flanks."], takeaways: ["Use 3-bar or 5-bar fractal definition for consistency.", "Consistency prevents moving goalposts."], commonMistakes: "Calling every intraday wiggle a major swing high.", quiz: { question: "In a 3-candle fractal rule, what constitutes a valid Swing High?", options: ["A candle whose high is higher than both the preceding and following candle highs", "Three identical candles", "Any green candle", "A candle with no volume"], correctIndex: 0, explanation: "A swing high forms when the central candle's high point stands above the candle before it and after it." } },
      { id: 3, title: "Higher Highs (HH) & Higher Lows (HL)", duration: "7 min", difficulty: "Intermediate", concept: "In an uptrend, every new high exceeds the previous high (HH), and every pullback terminates above the prior low (HL).", diagram: ChartDiagrams.marketStructure, deepDive: ["The trend remains bullish as long as the most recent HL is defended.", "HLs represent points where buyers defended price."], takeaways: ["In an uptrend, your stop loss belongs below the recent HL.", "Do not anticipate a break until it happens."], commonMistakes: "Shorting while price is printing pristine Higher Highs and Higher Lows.", quiz: { question: "Until which point is an uptrend technically considered intact?", options: ["Until price drops for 2 minutes", "Until the most recent Higher Low (HL) is decisively broken", "Until a red candle appears", "Until the trading week ends"], correctIndex: 1, explanation: "The structural definition of an uptrend holds until price violates and closes below the last confirmed Higher Low." } },
      { id: 4, title: "Lower Highs (LH) & Lower Lows (LL)", duration: "7 min", difficulty: "Intermediate", concept: "In a downtrend, sellers dominate by creating consecutive lower troughs (LL) and lower recovery peaks (LH).", diagram: ChartDiagrams.marketStructure, deepDive: ["Each rally is sold into by institutional supply.", "The key structural invalidation is the most recent LH."], takeaways: ["In a downtrend, look exclusively for short entries at Lower Highs.", "Never try to catch falling knives without a trend change."], commonMistakes: "Buying every dip in a steep downtrend before structure reverses.", quiz: { question: "In a confirmed downtrend, what does a Lower High (LH) represent?", options: ["A buy signal", "A rally attempt that failed to exceed the prior high, where sellers re-entered", "A broken broker server", "A market peak"], correctIndex: 1, explanation: "A Lower High proves buyers were too weak to retest or exceed former highs before sellers seized control again." } },
      { id: 5, title: "Break of Structure (BOS)", duration: "7 min", difficulty: "Intermediate", concept: "A Break of Structure occurs when price breaks and closes beyond the previous swing high (in an uptrend) or swing low (in a downtrend), confirming trend continuation.", diagram: ChartDiagrams.marketStructure, deepDive: ["BOS = Continuation signal.", "Requires a full candle close beyond the swing extreme."], takeaways: ["BOS confirms the existing trend has sustained power.", "After a BOS, expect a pullback to form a new HL/LH."], commonMistakes: "Counting a wick poke as a valid BOS without a candle close.", quiz: { question: "What does a 'BOS' (Break of Structure) signal to a trader?", options: ["The trend is dead", "The existing trend is continuing in its prevailing direction", "A system error", "A time to exit immediately"], correctIndex: 1, explanation: "BOS confirms the continuation of the prevailing trend by surpassing the most recent structural peak or trough." } },
      { id: 6, title: "Change of Character (CHOCH)", duration: "8 min", difficulty: "Intermediate", concept: "A Change of Character is the earliest signal of a potential trend reversal, marked when price breaks the structural low/high that created the most recent extreme.", diagram: ChartDiagrams.marketStructure, deepDive: ["In an uptrend: breaking the HL that formed the last HH is a Bearish CHOCH.", "Signals smart money shifting directional bias."], takeaways: ["CHOCH is an early warning system.", "Wait for a retest following CHOCH for optimal confirmation."], commonMistakes: "Confusing internal minor pullbacks with major structural CHOCH.", quiz: { question: "In an uptrend, what specific event triggers a Bearish Change of Character (CHOCH)?", options: ["Price hitting a round number", "Price breaking and closing below the Higher Low that produced the final Higher High", "A single red candle", "A gap up at market open"], correctIndex: 1, explanation: "When price takes out the last defensive Higher Low, market character transitions from bullish to bearish." } },
      { id: 7, title: "Internal vs External Structure", duration: "8 min", difficulty: "Intermediate", concept: "Learn to distinguish between macro swings (External Structure) and the minor oscillations that occur inside them (Internal Structure).", diagram: ChartDiagrams.marketStructure, deepDive: ["External structure = Higher timeframe anchor (4H/Daily).", "Internal structure = Lower timeframe delivery (15m/5m)."], takeaways: ["Don't let minor internal noise fake you out of the external trend.", "Trade internal structure into external high-probability zones."], commonMistakes: "Treating internal 1m structural breaks as major trend reversals.", quiz: { question: "Why do traders differentiate between internal and external structure?", options: ["To charge more for trading courses", "To avoid confusing lower-timeframe minor pullbacks with major higher-timeframe trend changes", "It has no practical use", "To trade only after hours"], correctIndex: 1, explanation: "It prevents traders from misinterpreting a small lower-timeframe pullback as a complete macro trend reversal." } },
      { id: 8, title: "Complex Pullbacks vs Direct Trends", duration: "7 min", difficulty: "Intermediate", concept: "Understand when markets retrace cleanly in 3 waves (ABC) versus complex, grinding corrections that attempt to shake out weak hands.", diagram: ChartDiagrams.marketStructure, deepDive: ["Deep pullbacks test discount pricing.", "Shallow pullbacks indicate hyper-strong momentum."], takeaways: ["Identify structure inside pullbacks.", "Wait for internal CHOCH to signal the end of a pullback."], commonMistakes: "Panic-selling during a healthy 50% structural pullback.", quiz: { question: "How does a trader confirm that a pullback in an uptrend has likely concluded?", options: ["When social media turns bullish", "When lower-timeframe internal structure prints a Bullish CHOCH aligned with the macro trend", "By guessing at the bottom", "When volume reaches zero"], correctIndex: 1, explanation: "An internal bullish CHOCH provides objective evidence that buyers have regained lower-timeframe control." } },
      { id: 9, title: "Range-Bound Structures & Consolidations", duration: "7 min", difficulty: "Intermediate", concept: "Recognize when the market has ceased printing trending structure and has entered a horizontal range bounded by clear Range High and Range Low extremes.", diagram: ChartDiagrams.supportResistance, deepDive: ["70% of market time is spent in non-trending ranges.", "Equilibrium (50%) acts as a magnet."], takeaways: ["Buy low at range support, sell high at range resistance.", "Stop trading trend-continuation strategies inside a chopping range."], commonMistakes: "Buying breakouts inside the middle of a range.", quiz: { question: "What is the optimal strategy during a confirmed Range-Bound consolidation?", options: ["Aggressively buy breakouts in the middle", "Fade the extremes: look for rejection at Range High and support at Range Low", "Stop checking the charts", "Use 100x leverage"], correctIndex: 1, explanation: "Ranges reward trading from the boundaries (buying discount at range low, selling premium at range high)." } },
      { id: 10, title: "Complete Market Structure Mapping System", duration: "7 min", difficulty: "Intermediate", concept: "Synthesize all structure concepts into a systematic, repeatable framework for daily market preparation.", diagram: ChartDiagrams.marketStructure, deepDive: ["Step 1: Map external swing high/low.", "Step 2: Check for BOS or CHOCH.", "Step 3: Define whether we are in an expansion or pullback leg."], takeaways: ["Never guess the market's mind; map its footprints.", "A mechanical process reduces emotional interference."], commonMistakes: "Altering mapping rules mid-trade to justify a losing position.", quiz: { question: "What is the primary psychological benefit of having a mechanical market structure mapping system?", options: ["Guaranteed profits every session", "Removing subjective emotional guesswork from trend identification", "Eliminating broker commissions", "Trading without needing a computer"], correctIndex: 1, explanation: "Mechanical rules eliminate emotional bias and erratic decision-making when reading live market action." } }
    ]
  },
  {
    id: "course-6",
    title: "Liquidity Concepts",
    shortDesc: "Understand resting buy/sell liquidity, equal highs/lows, sweeps, and educational stop runs.",
    difficulty: "Intermediate → Advanced",
    category: "Institutional",
    duration: "70 min",
    svgPreview: ChartDiagrams.liquiditySweep,
    chapters: [
      { id: 1, title: "What is Liquidity?", duration: "6 min", difficulty: "Intermediate", concept: "Liquidity represents the availability of resting orders (limit orders, stop losses) in the market. Large institutional players need immense liquidity to enter or exit positions without slippage.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Where retail places stop-losses, institutions find their counterpart fills.", "Price is drawn toward large pools of resting orders like a magnet."], takeaways: ["Liquidity fuels large market moves.", "Ask yourself: 'Where are everyone's stop losses resting?'"], commonMistakes: "Thinking institutions trade 1 contract at market price like retail traders.", quiz: { question: "Why do institutional market participants seek large liquidity pools?", options: ["They enjoy hunting retail traders", "They require large clusters of opposing orders to fill their massive position sizes without extreme slippage", "To shut down exchanges", "To cause volatility for fun"], correctIndex: 1, explanation: "Institutions trade billions of dollars; they cannot buy unless massive sell orders (like stop losses) exist to absorb their volume." } },
      { id: 2, title: "Buy-Side Liquidity (BSL)", duration: "7 min", difficulty: "Intermediate", concept: "Buy-Side Liquidity consists of resting Buy Stop orders located above swing highs and resistance levels. When triggered, they generate intense buying volume.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Includes breakout buy stops and short seller stop losses.", "Institutions use BSL to sell their long inventory into willing buyers."], takeaways: ["Above prominent highs lies Buy-Side Liquidity.", "Price frequently sweeps BSL before turning bearish."], commonMistakes: "Buying the exact moment BSL is pierced without confirmation.", quiz: { question: "Where is Buy-Side Liquidity (BSL) typically clustered?", options: ["Beneath equal swing lows", "Above prominent swing highs and equal resistance peaks", "In the center of the daily range", "At the market open price"], correctIndex: 1, explanation: "Resting buy stops (from short-seller stops and breakout traders) naturally accumulate above swing highs." } },
      { id: 3, title: "Sell-Side Liquidity (SSL)", duration: "7 min", difficulty: "Intermediate", concept: "Sell-Side Liquidity consists of resting Sell Stop orders positioned below key swing lows and support levels.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Includes long trader protective stops and breakdown sellers.", "Institutions use SSL to accumulate large buy positions at discount prices."], takeaways: ["Below prominent lows lies Sell-Side Liquidity.", "Price often plunges below support to collect SSL before rocketing higher."], commonMistakes: "Panic-selling at the exact low of an SSL sweep.", quiz: { question: "What orders make up Sell-Side Liquidity below a major low?", options: ["Buy limit orders only", "Sell stop orders from long protective stops and aggressive breakdown sellers", "Broker commissions", "Exchange dividends"], correctIndex: 1, explanation: "Sell stops from trapped longs and breakdown traders cluster beneath clear support lows." } },
      { id: 4, title: "Equal Highs (EQH) & Double Tops", duration: "7 min", difficulty: "Intermediate", concept: "Equal Highs create an irresistible beacon of liquidity. Retail treats them as 'strong resistance', creating an enormous pool of resting buy stops above.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Clean double tops are rarely respected over long periods.", "Institutions recognize where predictable stop losses congregate."], takeaways: ["Be extremely cautious shorting directly into clean Equal Highs.", "Expect an eventual liquidity raid above equal peaks."], commonMistakes: "Trusting an obvious double top as permanent impenetrable resistance.", quiz: { question: "What does modern liquidity analysis teach about clean Equal Highs (EQH)?", options: ["They are unbreakable permanent resistance", "They harbor massive pools of resting buy-stop liquidity that price will likely target and sweep", "They signal immediate market holiday", "They have no statistical meaning"], correctIndex: 1, explanation: "Clean equal highs create a concentration of resting buy stops, making them an obvious target for liquidity sweeps." } },
      { id: 5, title: "Equal Lows (EQL) & Double Bottoms", duration: "7 min", difficulty: "Intermediate", concept: "Equal Lows concentrate vast pools of protective sell stops. Smart money often engineers a rapid dive beneath equal lows to fulfill institutional buy demand.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Clean horizontal double bottoms invite retail stops just below.", "A swift wick below followed by an immediate reclaim is a hallmark sweep."], takeaways: ["Watch for wick sweeps below EQL.", "Reclaiming EQL with a candle close confirms a bullish sweep."], commonMistakes: "Placing your protective stop loss 1 tick below textbook double bottoms.", quiz: { question: "What is the classic signature of an Equal Lows liquidity sweep?", options: ["Price slowly drifts down and stays there forever", "Price rapidly wicks below the equal lows, triggers stops, and aggressively reclaims back above", "Price freezes completely", "High volume with zero price movement"], correctIndex: 1, explanation: "A rapid wick below followed by an aggressive reclaim indicates resting sell stops were triggered to fuel institutional long entries." } },
      { id: 6, title: "Liquidity Pools & Voids", duration: "7 min", difficulty: "Advanced", concept: "Examine how liquidity pools accumulate around structural extremes and how liquidity voids (thin market depth) cause rapid price vacuum moves.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Voids occur when price moves so fast few orders are executed.", "Markets gravitate to refill voids over time."], takeaways: ["Price is drawn to liquidity like water flowing downhill.", "Combine liquidity pool awareness with your market structure map."], commonMistakes: "Entering positions in liquidity voids without clear directional confluence.", quiz: { question: "How does price typically behave when traversing an area of low liquidity (a void)?", options: ["It moves extremely slowly in tiny increments", "It moves rapidly with wide-spread candles because few orders exist to slow it down", "It halts completely", "It bounces backward immediately"], correctIndex: 1, explanation: "A void lacks resting limit orders to absorb price, causing price to travel swiftly across that price vacuum." } },
      { id: 7, title: "Liquidity Sweeps / Raids Explained", duration: "8 min", difficulty: "Advanced", concept: "A Liquidity Sweep occurs when price pierces a key high or low, consumes the resting liquidity, and immediately reverses, leaving a long rejection shadow.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Look for wick on higher timeframe, rejection candle on lower timeframe.", "The sweep validates that no higher buyers or lower sellers exist at those prices."], takeaways: ["A sweep is NOT a trend breakout.", "Wait for price to close back inside the range to confirm the sweep."], commonMistakes: "Buying breakout tops right into the jaws of a liquidity sweep.", quiz: { question: "How can a trader differentiate a valid Breakout from a Liquidity Sweep?", options: ["By looking at chart colors", "A breakout closes decisively beyond the level; a sweep pierces with a wick and closes back inside the range", "There is no difference", "By checking Twitter"], correctIndex: 1, explanation: "A sweep fails to hold outside the boundary and violently closes back inside, demonstrating rejection." } },
      { id: 8, title: "Educational Context: 'Stop Hunts' Demystified", duration: "7 min", difficulty: "Advanced", concept: "Educational Note: Retail slang uses 'stop hunt' to describe liquidity sweeps. Understand the mathematical reality of order book dynamics without falling into conspiracy theories.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Market makers provide liquidity under mathematical inventory models.", "Price moving to where orders rest is natural market efficiency, not illegal manipulation directed at you personally."], takeaways: ["Stop hunts are predictable mathematical order-flow events.", "Align your entries with institutional liquidity requirements."], commonMistakes: "Believing a broker is watching your $50 account and deliberately moving global trillions to get you.", quiz: { question: "What is the educational and objective reality behind so-called 'stop hunts'?", options: ["Brokers manually targeted your individual trade", "Price naturally gravitates toward large concentrations of resting orders required to fill institutional transactions", "Alien algorithms", "Market crashes"], correctIndex: 1, explanation: "Price is drawn to large pools of resting volume; understanding this mechanics frees traders from paranoid conspiracy thinking." } },
      { id: 9, title: "Liquidity and Market Structure Integration", duration: "7 min", difficulty: "Advanced", concept: "Learn how liquidity sweeps catalyze new market structure legs (BOS and CHOCH).", diagram: ChartDiagrams.liquiditySweep, deepDive: ["A sweep of major BSL often triggers the bearish CHOCH on lower timeframes.", "Sweeping external liquidity fuels internal trend runs."], takeaways: ["High probability setups occur when a liquidity sweep leads to a structural CHOCH.", "This forms the foundational entry trigger for advanced traders."], commonMistakes: "Trading sweeps without structural confirmation.", quiz: { question: "What powerful confluence setup occurs after a higher-timeframe liquidity sweep?", options: ["Market closure", "A lower-timeframe Change of Character (CHOCH) confirming the directional reversal", "A guaranteed 100% win", "Random consolidation"], correctIndex: 1, explanation: "A sweep followed immediately by a lower-timeframe CHOCH provides structural proof that the reversal is actively underway." } },
      { id: 10, title: "Practical Liquidity Analysis Blueprint", duration: "7 min", difficulty: "Advanced", concept: "A checklist to scan for liquidity pools, evaluate potential sweep candidates, and plan safe, high-probability entries.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Step 1: Identify BSL and SSL targets.", "Step 2: Watch price interaction at the sweep.", "Step 3: Enter on confirmation with tight invalidation."], takeaways: ["Trade where others are forced to exit.", "Patience to let the sweep complete is your primary edge."], commonMistakes: "Trying to guess the exact micro-penny peak of a sweep.", quiz: { question: "Where is the safest entry trigger during a liquidity sweep setup?", options: ["Predicting the exact wick tip before it turns", "After the sweep candle closes back inside the level and prints a confirmation reversal bar", "Before the level is even reached", "At random times"], correctIndex: 1, explanation: "Waiting for the sweep candle to close back inside proves that price rejected the extreme before you put capital at risk." } }
    ]
  },
  {
    id: "course-7",
    title: "Smart Money Concepts — SMC",
    shortDesc: "Demystify SMC: Order Blocks, Fair Value Gaps (FVG), Premium & Discount, and BOS/CHOCH alignment.",
    difficulty: "Advanced",
    category: "Institutional",
    duration: "75 min",
    svgPreview: ChartDiagrams.orderBlockFVG,
    chapters: [
      { id: 1, title: "Introduction to Smart Money Concepts (SMC)", duration: "7 min", difficulty: "Advanced", concept: "SMC is an educational price action framework that interprets price through the lens of institutional order flow, imbalances, and liquidity rather than retail indicators.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Focuses on supply/demand origins called Order Blocks.", "Uses Fair Value Gaps (FVG) to track algorithmic price delivery."], takeaways: ["SMC is a refined language for classic price action.", "Do not treat it like magic; it is pure supply, demand, and liquidity."], commonMistakes: "Thinking SMC guarantees wins. Risk management remains mandatory.", quiz: { question: "What is the core premise of Smart Money Concepts (SMC)?", options: ["Trading based on stochastic oscillators", "Analyzing price through institutional order flow, liquidity sweeps, and price imbalances", "Reading financial newspapers", "Using 50 moving averages"], correctIndex: 1, explanation: "SMC models price delivery through the mechanics of institutional liquidity and order imbalance." } },
      { id: 2, title: "Market Structure in SMC", duration: "7 min", difficulty: "Advanced", concept: "Review how SMC maps Break of Structure (BOS) and Change of Character (CHOCH) with strict candle-body closing rules.", diagram: ChartDiagrams.marketStructure, deepDive: ["Wick breaks = Liquidity Sweeps.", "Body closes beyond swing = Valid BOS."], takeaways: ["Strict candle close criteria eliminates fakeouts.", "Align with higher timeframe directional bias."], commonMistakes: "Counting a wick poke as a structural break.", quiz: { question: "In SMC methodology, what is required to confirm a valid BOS?", options: ["A wick exceeding the high by 1 cent", "A candle body closing decisively beyond the swing point", "High volume on social media", "An indicator alert"], correctIndex: 1, explanation: "SMC requires a candle body close to prove structural continuation rather than an ephemeral wick sweep." } },
      { id: 3, title: "BOS (Break of Structure) Deep Dive", duration: "7 min", difficulty: "Advanced", concept: "Explore how consecutive BOS legs generate order flow momentum and identify which swing points hold true structural weight.", diagram: ChartDiagrams.marketStructure, deepDive: ["Strong Highs/Lows: Result in a BOS.", "Weak Highs/Lows: Fail to break structure and are targeted for liquidity."], takeaways: ["Only protect your trades behind Strong structural points.", "Weak highs/lows are expected to be swept."], commonMistakes: "Anchoring stops behind weak swing points that never broke structure.", quiz: { question: "What is a 'Strong Low' in SMC terminology?", options: ["Any low on the chart", "A swing low that successfully launched an impulse that caused a valid BOS", "A low with no volume", "A low below $100"], correctIndex: 1, explanation: "A swing point is validated as 'Strong' only if its impulse possessed enough strength to break opposing structure." } },
      { id: 4, title: "CHOCH (Change of Character) Mastery", duration: "8 min", difficulty: "Advanced", concept: "Distinguish between minor internal CHOCH (pullback alert) and major swing CHOCH (full structural trend reversal).", diagram: ChartDiagrams.marketStructure, deepDive: ["Internal CHOCH signals a pullback to a higher-timeframe POI (Point of Interest).", "External CHOCH signals the macro trend has shifted."], takeaways: ["Do not confuse a temporary pullback with a complete macro trend shift.", "Look for CHOCH inside higher timeframe POIs."], commonMistakes: "Flipping long/short 10 times a day on micro CHOCH noise.", quiz: { question: "What does an internal CHOCH inside an existing macro uptrend typically indicate?", options: ["The asset is going to zero", "The start of a healthy minor pullback into a discount POI", "A broker outage", "An immediate exit with loss"], correctIndex: 1, explanation: "Internal CHOCH usually signals the start of a minor corrective pullback, providing opportunity to prepare for discount entries." } },
      { id: 5, title: "Order Blocks (OB): Origins of Displacement", duration: "8 min", difficulty: "Advanced", concept: "An Order Block is the final counter-trend candle before an aggressive displacement move that successfully broke market structure.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Bullish OB: Final bearish candle before a strong upward displacement.", "Bearish OB: Final bullish candle before a strong downward drop.", "Must have created an FVG and broken structure."], takeaways: ["Not every candle is an order block.", "Valid OBs must create displacement and an FVG."], commonMistakes: "Marking 15 order blocks on every single chart.", quiz: { question: "What characteristics must an Order Block possess to be considered valid?", options: ["It must be red", "It must precede strong displacement, leave an FVG, and break market structure", "It must occur on Mondays only", "It has no specific rules"], correctIndex: 1, explanation: "A valid Order Block requires displacement, an imbalance (FVG), and a confirmed break of structure (BOS)." } },
      { id: 6, title: "Fair Value Gaps (FVG) / Imbalances", duration: "8 min", difficulty: "Advanced", concept: "A Fair Value Gap is a 3-candle pattern where Candle 1's high and Candle 3's low do not overlap, leaving an imbalance in Candle 2.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Represents rapid price delivery where only one side had orders filled.", "Algorithmic engines frequently deliver price back to fill (mitigate) the FVG."], takeaways: ["FVGs act like institutional magnets.", "Mitigation of an FVG often provides an ideal entry trigger."], commonMistakes: "Expecting price to fill 100% of every FVG immediately.", quiz: { question: "In a bullish Fair Value Gap (FVG), between which two candles does the price gap exist?", options: ["Between Candle 1's High and Candle 3's Low", "Between Candle 1's Open and Candle 2's Close", "Between Candle 4 and 5", "There is no gap"], correctIndex: 0, explanation: "A bullish FVG forms when Candle 2 is so large that Candle 1's high does not touch Candle 3's low, creating an unmitigated gap." } },
      { id: 7, title: "Liquidity and Inducement", duration: "7 min", difficulty: "Advanced", concept: "Inducement is minor internal liquidity created intentionally to trap impatient early retail traders before price hits the real Order Block.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["The first minor swing high/low before a POI is often bait (Inducement).", "Wait for inducement to get swept into your POI."], takeaways: ["Be patient: let early buyers get stopped out at inducement.", "Enter when the real POI is tapped."], commonMistakes: "Entering on the first minor internal pivot (inducement) and getting stopped out.", quiz: { question: "What is an 'Inducement' in SMC trading?", options: ["A bonus paid by a broker", "A minor liquidity level engineered to lure early traders in before the real POI is reached", "A government grant", "A chart indicator"], correctIndex: 1, explanation: "Inducement baits premature entries, whose stop losses then provide the liquidity to drive price into the primary POI." } },
      { id: 8, title: "Premium vs Discount Pricing", duration: "7 min", difficulty: "Advanced", concept: "Using a 50% equilibrium line over a swing range to ensure you exclusively Buy in Discount (< 50%) and Sell in Premium (> 50%).", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Above 50% = Premium (Expensive, ideal for selling).", "Below 50% = Discount (Cheap, ideal for buying)."], takeaways: ["Never buy in Premium; never sell in Discount.", "Improves your mathematical edge dramatically."], commonMistakes: "Buying an order block located in the top 80% of a swing range.", quiz: { question: "If you are looking to enter a Long position, in which zone of the swing range should you execute?", options: ["In the Premium zone (top 50%)", "In the Discount zone (bottom 50%)", "At the exact peak", "Anywhere randomly"], correctIndex: 1, explanation: "Long entries should strictly be executed in Discount (below 50% equilibrium) to buy at advantageous institutional pricing." } },
      { id: 9, title: "Confluence Trading: Stacking Probabilities", duration: "8 min", difficulty: "Advanced", concept: "Combine Higher-Timeframe Trend + Liquidity Sweep + Discount POI + FVG + Lower-Timeframe CHOCH for institutional grade setups.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["1 factor = 30% edge.", "3-4 aligned factors = high-probability asymmetry."], takeaways: ["Trade only A+ setups with 3+ confluence factors.", "High win-rate comes from quality, not quantity."], commonMistakes: "Executing trades when only 1 single factor is present.", quiz: { question: "What constitutes high-probability Confluence in an SMC trading model?", options: ["Using 10 indicators that all lag", "Alignment of HTF trend, liquidity sweep, discount Order Block, FVG, and LTF CHOCH", "Trading with maximum size", "Trading on weekends"], correctIndex: 1, explanation: "Stacking independent structural edges (HTF bias + sweep + unmitigated FVG/OB + LTF CHOCH) creates true confluence." } },
      { id: 10, title: "Complete SMC Analysis Framework", duration: "8 min", difficulty: "Advanced", concept: "A complete, step-by-step institutional SMC routine: Daily Top-Down bias, 4H POI identification, 15m structural refinement, and 1m/5m execution.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Follow a structured workflow every single trading session.", "Discipline in journaling and tracking execution."], takeaways: ["SMC is a complete visual language.", "Remain humble, manage risk, and focus on execution consistency."], commonMistakes: "Overcomplicating simple price moves with excessive esoteric jargon.", quiz: { question: "What is the single most important habit for maintaining long-term profitability with SMC?", options: ["Predicting every candle", "Rigorous risk management and disciplined adherence to your validated framework", "Posting charts on social media", "Using 100x leverage"], correctIndex: 1, explanation: "Flawless risk management and consistent rule execution are the true determinants of long-term trading longevity." } }
    ]
  },
  {
    id: "course-8",
    title: "ICT Concepts",
    shortDesc: "Educational framework exploring ICT terminology: Displacement, Sessions, FVGs, and Time-Based Analysis.",
    difficulty: "Advanced",
    category: "Institutional",
    duration: "75 min",
    svgPreview: ChartDiagrams.orderBlockFVG,
    chapters: [
      { id: 1, title: "Introduction to ICT Concepts (Educational Overview)", duration: "7 min", difficulty: "Advanced", concept: "Educational Notice: ICT concepts represent an educational analytical framework popular among retail technical analysts. In this course, we examine its core mechanics objectively without presenting disputed theories as guaranteed institutional secrets.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Focuses on time and price alignment.", "Deconstructs delivery into liquidity, imbalance, and session timing."], takeaways: ["Treat ICT as an analytical framework for reading price.", "Never accept claims of guaranteed wealth or market conspiracy as financial facts."], commonMistakes: "Assuming esoteric terminology replaces basic risk management.", quiz: { question: "How should ICT concepts be viewed in an objective educational setting?", options: ["As guaranteed secrets that never fail", "As a structured educational technical framework for studying price action and timing", "As illegal software", "As a regulated broker"], correctIndex: 1, explanation: "ICT concepts serve as an educational price action framework and should be studied with objective critical thinking." } },
      { id: 2, title: "Market Structure & Dealing Ranges", duration: "7 min", difficulty: "Advanced", concept: "Defining the Dealing Range: identifying the absolute higher timeframe swing high and swing low that contain current price action.", diagram: ChartDiagrams.marketStructure, deepDive: ["Inside the dealing range, price oscillates between premium and discount.", "Expansion legs break the range; consolidation consolidates inside."], takeaways: ["Know your active dealing range.", "Never trade without knowing where you sit inside the macro range."], commonMistakes: "Confusing intraday noise with the active higher-timeframe dealing range.", quiz: { question: "What is a 'Dealing Range'?", options: ["The spread charged by a broker", "The active swing high and swing low boundaries that contain current price action", "The trading desk hours", "The exchange floor"], correctIndex: 1, explanation: "A Dealing Range defines the outer structural boundaries within which current price is actively auctioning." } },
      { id: 3, title: "Liquidity Runs & Buy/Sell Stops", duration: "7 min", difficulty: "Advanced", concept: "Understanding how algorithms systematically target resting liquidity above old highs (Buy-side) and below old lows (Sell-side).", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Old Highs = BSL.", "Old Lows = SSL.", "Equal highs/lows are high-probability targets."], takeaways: ["Markets deliver price from liquidity pool to liquidity pool.", "Target opposing liquidity for your take-profit."], commonMistakes: "Aiming for arbitrary profit targets instead of natural liquidity pools.", quiz: { question: "Where is the most logical structural take-profit target for a long position?", options: ["A random round dollar number", "The next prominent Buy-Side Liquidity pool (old swing high / EQH)", "10 cents above entry", "Never exit"], correctIndex: 1, explanation: "Targeting resting Buy-Side Liquidity above previous peaks aligns your exit with where the market is naturally seeking orders." } },
      { id: 4, title: "Displacement: The Signature of Intent", duration: "8 min", difficulty: "Advanced", concept: "Displacement is a sudden, aggressive, energetic move showing one-sided conviction, leaving behind Fair Value Gaps.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Characterized by consecutive large-bodied candles.", "Proves institutional order delivery was unleashed."], takeaways: ["No displacement = no institutional sponsorship.", "Always wait for displacement before looking for entries."], commonMistakes: "Entering on sluggish, drifting candles that lack energetic displacement.", quiz: { question: "What visually characterizes genuine 'Displacement' on a candlestick chart?", options: ["Small overlapping bodies with long wicks", "Large, energetic, wide-range candle bodies that leave behind FVGs", "Zero trading volume", "Sideways flat bars"], correctIndex: 1, explanation: "Displacement manifests as wide-range, energetic candle bodies leaving imbalances, proving institutional intent." } },
      { id: 5, title: "Fair Value Gaps (FVG) and Balanced Price Ranges", duration: "8 min", difficulty: "Advanced", concept: "A deep look at how FVGs function as optimal entry zones and how Balanced Price Ranges form when price trades through an FVG both ways.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Consequent Encroachment (CE) = the 50% midpoint of the FVG.", "Reaction at CE often provides highest precision."], takeaways: ["The 50% midpoint of an FVG is a key institutional reaction level.", "Respect how price delivers into the FVG."], commonMistakes: "Thinking every FVG will produce a 1000% rally.", quiz: { question: "What does 'Consequent Encroachment' (CE) refer to in FVG analysis?", options: ["A legal trading restriction", "The exact 50% midpoint of a Fair Value Gap", "The closing price of the session", "A broker fee"], correctIndex: 1, explanation: "Consequent Encroachment (CE) is the exact 50% midpoint level of a Fair Value Gap, frequently acting as a key reaction point." } },
      { id: 6, title: "Order Blocks & Breaker Blocks", duration: "8 min", difficulty: "Advanced", concept: "Understand standard Order Blocks and the Breaker Block—a failed order block that was broken through and now flips to provide support/resistance.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Breaker Block = An order block that was invalidated by a liquidity sweep and subsequent displacement.", "Acts as powerful role reversal."], takeaways: ["Breakers offer exceptional risk-to-reward.", "Formed by trapped traders on a failed breakout."], commonMistakes: "Confusing a standard mitigation with a Breaker block.", quiz: { question: "What defines an ICT 'Breaker Block'?", options: ["A hardware computer error", "An Order Block that was violated after a liquidity sweep and now acts in reverse polarity", "A block with zero volume", "An after-hours trade"], correctIndex: 1, explanation: "A Breaker Block is an order block that was broken through following a liquidity sweep, converting into a reverse-polarity support/resistance zone." } },
      { id: 7, title: "Premium vs Discount Equilibrium", duration: "7 min", difficulty: "Advanced", concept: "Dividing the dealing range into quadrants: Deep Discount, Discount, Equilibrium (50%), Premium, and Deep Premium.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Optimal Trade Entry (OTE) sits between 62% and 79% retracement in discount.", "Protects you from buying near the top of the range."], takeaways: ["Always ask: 'Am I buying in Discount?'", "Equilibrium is the neutral baseline."], commonMistakes: "Executing longs in Deep Premium.", quiz: { question: "Between what retracement percentages does the 'Optimal Trade Entry' (OTE) typically sit?", options: ["10% to 20%", "62% to 79% in the discount zone", "95% to 100%", "Zero percent"], correctIndex: 1, explanation: "OTE sits in the deep discount zone between 62% and 79% retracement, providing maximum reward-to-risk asymmetry." } },
      { id: 8, title: "Trading Sessions & Killzones", duration: "8 min", difficulty: "Advanced", concept: "Time of day is just as critical as price level. Explore the major institutional timing windows: London Open, New York Open, and London Close.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["London Session (2:00 AM - 5:00 AM EST): Often sets the high or low of the day.", "New York Session (7:00 AM - 10:00 AM EST): High volatility and trend continuation/reversal."], takeaways: ["Trade only during active Killzones when real liquidity is present.", "Avoid the dead lunch hour (12:00 PM - 1:00 PM EST)."], commonMistakes: "Executing trades during late Asian session or dead afternoon hours and getting chopped up.", quiz: { question: "Why do institutional frameworks emphasize trading strictly during specific 'Killzones' (e.g. London & NY Open)?", options: ["Brokers are only open then", "These windows correspond to peak real-volume injection and algorithmic order delivery", "To avoid night electricity costs", "It doesn't matter"], correctIndex: 1, explanation: "Active session opens bring massive institutional order flows and clear directional momentum, minimizing chop." } },
      { id: 9, title: "Time-Based Concepts (Judas Swing & AMD)", duration: "8 min", difficulty: "Advanced", concept: "Examine Accumulation, Manipulation, and Distribution (AMD) and the 'Judas Swing'—a false morning move designed to engineer liquidity before the true session trend begins.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Accumulation: Range-bound Asian session.", "Manipulation (Judas Swing): False break of Asian high/low.", "Distribution: Real directional trend through London/NY."], takeaways: ["The first move at a session open is frequently a false fakeout (Judas).", "Wait for the manipulation sweep to complete."], commonMistakes: "Chasing the first 5-minute candle at session open.", quiz: { question: "What is the purpose of the 'Judas Swing' at a session open?", options: ["To announce the news", "To fake out retail traders into the wrong direction and sweep liquidity before the real trend commences", "To close the market", "A system glitch"], correctIndex: 1, explanation: "The Judas Swing is an initial false run designed to lure retail breakout traders and trigger stops before reversing into the true trend." } },
      { id: 10, title: "Combining ICT Concepts Ethically & Responsibly", duration: "8 min", difficulty: "Advanced", concept: "Synthesize the entire framework into a grounded, realistic trading routine. Educational summary on discipline, emotional mastery, and risk control.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Trading is a marathon of risk management, not a sprint of get-rich-quick schemes.", "Always apply position sizing, strict stop-losses, and realistic expectations."], takeaways: ["No technical methodology eliminates market risk.", "True mastery is emotional control and capital preservation."], commonMistakes: "Over-leveraging accounts thinking any concept is foolproof.", quiz: { question: "What is the golden rule of trading longevity regardless of which technical framework you use?", options: ["Predicting news releases", "Never risking more than a small, calculated percentage (e.g. 1-2%) of capital per trade", "Using maximum leverage", "Trading 24 hours a day"], correctIndex: 1, explanation: "Strict capital preservation and risking only 1-2% per trade ensures that a string of inevitable losses cannot destroy your account." } }
    ]
  },
  {
    id: "course-9",
    title: "Multi-Timeframe Analysis",
    shortDesc: "Master top-down analysis: Monthly, Weekly, Daily, 4H, and 15m alignment for precision entries.",
    difficulty: "Advanced",
    category: "Strategy",
    duration: "65 min",
    svgPreview: ChartDiagrams.marketStructure,
    chapters: [
      { id: 1, title: "Why Multiple Timeframes?", duration: "6 min", difficulty: "Advanced", concept: "Looking at a single timeframe is like examining an elephant through a microscope. Multi-Timeframe Analysis (MTF) provides perspective, establishing macro direction and micro execution precision.", diagram: ChartDiagrams.marketStructure, deepDive: ["Higher timeframe dictates the trend and dominant order flow.", "Lower timeframe provides precision entry with reduced risk."], takeaways: ["Always trade in the direction of the higher timeframe bias.", "Single-timeframe traders are constantly blind-sided."], commonMistakes: "Trading a 5-minute buy signal right into a Daily resistance supply wall.", quiz: { question: "What is the primary role of the Higher Timeframe in MTF analysis?", options: ["To execute fast scalps", "To establish the macro market bias, dominant trend, and major key levels", "To find 1-minute entries", "It has no purpose"], correctIndex: 1, explanation: "The higher timeframe reveals the macro tide and primary order flow direction that overwhelms lower timeframe noise." } },
      { id: 2, title: "Higher-Timeframe Bias (HTF)", duration: "6 min", difficulty: "Advanced", concept: "How to objectively determine the daily or weekly directional bias: is the market expanding, retracing, or consolidating?", diagram: ChartDiagrams.marketStructure, deepDive: ["Check Weekly/Daily market structure.", "Identify whether price is heading toward opposing liquidity."], takeaways: ["If Daily is bullish, look exclusively for long setups on lower timeframes.", "Aligning with HTF bias instantly boosts win-rates."], commonMistakes: "Fighting a roaring Daily trend because of a 1-minute red candle.", quiz: { question: "If the Daily timeframe is printing clean Higher Highs and Higher Lows, what should your directional bias be on lower timeframes?", options: ["Aggressively looking for short entries", "Exclusively seeking high-probability Long setups aligned with the Daily trend", "Neutral and confused", "Never trading"], correctIndex: 1, explanation: "Trading in direct harmony with the established higher timeframe trend provides maximum probability and edge." } },
      { id: 3, title: "Weekly Analysis: The Macro Map", duration: "7 min", difficulty: "Advanced", concept: "Establish the weekly range, key swing extremes, major support/demand zones, and high-impact liquidity pools.", diagram: ChartDiagrams.marketStructure, deepDive: ["Reviewed over the weekend before market open.", "Provides the foundational roadmap for the entire upcoming week."], takeaways: ["Mark previous week's High and Low (PWH / PWL).", "PWH and PWL are prime liquidity magnets."], commonMistakes: "Ignoring weekly levels and wondering why price reversed violently.", quiz: { question: "Why are the Previous Week's High (PWH) and Previous Week's Low (PWL) critical levels?", options: ["They are federal holidays", "They represent massive resting liquidity pools targeted by institutional participants", "They reset broker charts", "They have no significance"], correctIndex: 1, explanation: "The highs and lows of previous weeks contain massive pools of stop losses and breakout orders that markets seek." } },
      { id: 4, title: "Daily Analysis: The Trend Anchor", duration: "7 min", difficulty: "Advanced", concept: "The Daily chart is the primary working timeframe for institutional traders. Learn to read Daily candle closes and market structure.", diagram: ChartDiagrams.marketStructure, deepDive: ["Daily candle close sets the tone for the next 24 hours.", "Identifies whether today is expected to be a trend day or a consolidation day."], takeaways: ["Mark Daily POIs and order blocks.", "Observe how the previous Daily candle closed."], commonMistakes: "Executing trades before evaluating how yesterday's Daily candle closed.", quiz: { question: "What makes the Daily chart the most popular anchor timeframe for professional analysts?", options: ["It filters out intraday noise while providing reliable structural order flow clarity", "It requires you to stare at screens all day", "It only works on stocks", "It is the fastest chart"], correctIndex: 0, explanation: "The Daily timeframe strips away random intraday noise and provides clear, reliable consensus among major participants." } },
      { id: 5, title: "4H Analysis: The Structural Bridge", duration: "7 min", difficulty: "Advanced", concept: "The 4-Hour timeframe bridges the gap between the macro Daily bias and intraday execution, revealing clear structural swings and zones.", diagram: ChartDiagrams.marketStructure, deepDive: ["Ideal for mapping BOS, CHOCH, and unmitigated FVGs.", "Provides actionable zones for day and swing traders."], takeaways: ["Use 4H for your primary Points of Interest (POIs).", "Wait for price to arrive at 4H zones before zooming into execution charts."], commonMistakes: "Taking execution entries directly on 4H without refining on lower timeframes.", quiz: { question: "How is the 4H timeframe best utilized in a top-down workflow?", options: ["For entering on 1-second ticks", "As the primary bridge to map market structure, swing highs/lows, and valid POIs", "To check news headlines", "For after-hours review only"], correctIndex: 1, explanation: "The 4H timeframe is ideal for mapping structural swing points, BOS, CHOCH, and identifying pristine POIs." } },
      { id: 6, title: "1H Analysis: Refining Zones", duration: "6 min", difficulty: "Advanced", concept: "Refining 4H zones down to the 1-Hour chart to uncover precise Fair Value Gaps and clean base origins.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Shrinks the zone boundary.", "Clarifies the internal structure of the 4H swing."], takeaways: ["1H provides clarity when 4H looks like one giant candle.", "Identifies intraday liquidity pools."], commonMistakes: "Over-analyzing every single 1H candle instead of focusing on the zone reaction.", quiz: { question: "What is the objective of zooming from the 4H chart to the 1H chart?", options: ["To see more colors", "To refine large 4H zones and clarify internal price action", "To increase trade frequency by 100x", "To bypass trading fees"], correctIndex: 1, explanation: "Refining from 4H to 1H pinpoints the precise unmitigated origin inside a large zone, narrowing your entry area." } },
      { id: 7, title: "Lower-Timeframe Confirmation (15m/5m)", duration: "7 min", difficulty: "Advanced", concept: "Never enter a higher timeframe zone blindly. Wait for the 15-minute or 5-minute chart to confirm with a Change of Character (CHOCH).", diagram: ChartDiagrams.marketStructure, deepDive: ["Blind entry (Limit order at zone): High risk of getting steamrolled.", "Confirmation entry (Wait for LTF CHOCH): High probability, proven rejection."], takeaways: ["Confirmation trading dramatically reduces drawdown.", "If LTF does not reverse, you never lose money."], commonMistakes: "Standing in front of a runaway train without waiting for LTF confirmation.", quiz: { question: "What is the critical rule when price arrives at a major Daily/4H demand zone?", options: ["Immediately enter with maximum size", "Wait for lower timeframe (e.g. 15m/5m) confirmation such as a CHOCH before entering", "Short the market", "Close your trading software"], correctIndex: 1, explanation: "Waiting for lower-timeframe confirmation proves that buyers have actually stepped in to defend the higher-timeframe zone." } },
      { id: 8, title: "Top-Down Analysis Routine", duration: "7 min", difficulty: "Advanced", concept: "A standardized 4-step routine: (1) Monthly/Weekly Macro, (2) Daily Bias, (3) 4H POI, (4) 15m/5m Confirmation.", diagram: ChartDiagrams.marketStructure, deepDive: ["Execute this exact checklist before every trading session.", "Eliminates emotional guessing."], takeaways: ["Top-down alignment is the professional standard.", "Consistency in analysis produces consistency in results."], commonMistakes: "Starting your analysis on the 1-minute chart.", quiz: { question: "What is the proper sequence for a professional Top-Down Analysis routine?", options: ["1m -> 5m -> Daily", "Weekly/Daily (Bias) -> 4H/1H (Zones) -> 15m/5m (Confirmation Entry)", "Random clicking", "Checking chat rooms -> Buy"], correctIndex: 1, explanation: "Always proceed from macro context (Weekly/Daily) down to structural zones (4H/1H) and finally execution confirmation (15m/5m)." } },
      { id: 9, title: "Timeframe Alignment Matrix", duration: "6 min", difficulty: "Advanced", concept: "Create a confluence matrix: High Confidence when all timeframes align; Caution when HTF and LTF conflict.", diagram: ChartDiagrams.marketStructure, deepDive: ["When Daily, 4H, and 15m are all Bullish = Grade A+ trade.", "When Daily is Bullish but 4H is Bearish = Grade B or counter-trend scalp only."], takeaways: ["Only risk full size when all timeframes align.", "Reduce risk on counter-trend or conflicted setups."], commonMistakes: "Risking maximum size during low-confidence timeframe conflict.", quiz: { question: "When should a trader assign the highest position confidence (Grade A+)?", options: ["When Daily, 4H, and Lower Timeframes are all harmoniously aligned in the same structural direction", "When a stock is cheap", "When a famous trader recommends it", "During high volatility news"], correctIndex: 0, explanation: "Total multi-timeframe alignment across macro, intermediate, and execution timeframes provides the strongest mathematical edge." } },
      { id: 10, title: "Complete MTF Trading Workflow", duration: "7 min", difficulty: "Advanced", concept: "End-to-end case studies demonstrating how MTF analysis turns confusing charts into crystal-clear execution plans.", diagram: ChartDiagrams.marketStructure, deepDive: ["Walk through historical trade examples.", "Observe the patience required to wait for HTF zones."], takeaways: ["Patience is the foundation of multi-timeframe mastery.", "Let the trades come to your pre-marked zones."], commonMistakes: "Forcing trades when price is floating in no-man's land between timeframes.", quiz: { question: "What should you do if price is floating in the middle of a range without touching any key HTF zones?", options: ["Enter anyway to stay busy", "Exercise discipline, remain flat, and wait patiently for price to reach your defined zones", "Increase leverage", "Change timeframes until you find a trade"], correctIndex: 1, explanation: "Professional trading is 90% waiting. Remaining flat when price is in no-man's land protects your capital." } }
    ]
  },
  {
    id: "course-10",
    title: "Fibonacci Retracement & Extension",
    shortDesc: "Understand Fibonacci ratios: 23.6%, 38.2%, 50%, 61.8% Golden Pocket, and extensions as analytical tools.",
    difficulty: "Intermediate → Advanced",
    category: "Strategy",
    duration: "80 min",
    svgPreview: ChartDiagrams.fibonacciRetracement,
    chapters: [
      { id: 1, title: "Fibonacci Basics & Golden Ratio", duration: "6 min", difficulty: "Intermediate", concept: "The Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13...) yields mathematical ratios found extensively in nature, mathematics, and market pullbacks. Important Educational Note: Fibonacci levels are analytical probability zones, NOT magical reversal guarantees.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Key derived ratios: 0.236, 0.382, 0.500, 0.618, 0.786.", "Markets reflect natural human crowd psychology and mathematical equilibrium."], takeaways: ["Fibonacci is a measurement tool, not an automatic guarantee.", "Always combine Fibonacci with market structure."], commonMistakes: "Believing price must bounce to the exact penny on every Fibonacci line.", quiz: { question: "What is the fundamental nature of Fibonacci levels in technical analysis?", options: ["Magical guaranteed reversal points", "Analytical measurement tools that identify potential reaction zones when combined with structure", "Broker software errors", "Arbitrary lines with zero meaning"], correctIndex: 1, explanation: "Fibonacci levels are analytical probability tools that measure natural pullback depth; they are never guaranteed reversal points." } },
      { id: 2, title: "Understanding Retracements", duration: "6 min", difficulty: "Intermediate", concept: "A Retracement is a temporary counter-trend pullback that occurs inside an established impulse leg before the primary trend resumes.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Measures how deeply buyers or sellers allow the market to correct.", "Anchored from the absolute Swing Low to Swing High."], takeaways: ["In an uptrend: Anchor from Low (1.0) to High (0.0).", "In a downtrend: Anchor from High (1.0) to Low (0.0)."], commonMistakes: "Drawing Fibonacci backwards from right to left.", quiz: { question: "In an uptrend, how should the Fibonacci Retracement tool be anchored?", options: ["From the Swing High down to the Swing Low", "From the Swing Low (origin) up to the Swing High (peak)", "At any random candle", "Horizontally across the middle"], correctIndex: 1, explanation: "In an uptrend, anchor from the origin Swing Low (100%) to the peak Swing High (0%) to measure pullback depths." } },
      { id: 3, title: "Identifying Proper Swing Highs and Lows", duration: "6 min", difficulty: "Intermediate", concept: "The accuracy of your Fibonacci levels depends entirely on anchoring to true, validated structural swing points rather than arbitrary intraday wicks.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Anchor only to significant swing points that created a BOS.", "Ignore minor internal wiggles."], takeaways: ["Garbage in, garbage out: anchor to true structural swings.", "Be consistent with wick-to-wick vs body-to-body rules."], commonMistakes: "Anchoring Fibonacci to random candles inside the middle of a consolidation.", quiz: { question: "What happens if you anchor your Fibonacci tool to an invalid, minor swing point?", options: ["Your platform crashes", "The resulting retracement levels will be inaccurate and unaligned with institutional orders", "Nothing changes", "You receive a fine"], correctIndex: 1, explanation: "Fibonacci requires validated structural swing extremes; anchoring to random points generates noisy, misleading levels." } },
      { id: 4, title: "The 23.6% Level: Shallow Momentum", duration: "5 min", difficulty: "Intermediate", concept: "The 23.6% level is a shallow retracement seen exclusively in hyper-aggressive, runaway momentum markets.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Indicates extreme urgency where buyers refuse to let price pull back.", "High risk of sudden deeper retracement if momentum stalls."], takeaways: ["Rarely offers ideal risk-to-reward for conservative entries.", "Best suited for momentum scalpers."], commonMistakes: "Chasing 23.6% pullbacks with large position size.", quiz: { question: "What does a shallow retracement that bounces at only 23.6% indicate about market conditions?", options: ["Extreme weakness", "Hyper-aggressive momentum where buyers refuse to allow deep pullbacks", "Market closure", "A ranging market"], correctIndex: 1, explanation: "Shallow bounces at 23.6% indicate powerful one-sided momentum, though risk-to-reward for new entries is compressed." } },
      { id: 5, title: "The 38.2% Level: Healthy Trend Continuation", duration: "6 min", difficulty: "Intermediate", concept: "The 38.2% level represents the boundary of strong trending environments. Pullbacks holding 38.2% signify robust trend health.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Common in strong trending equity and commodity runs.", "Often aligns with the previous broken swing high (BOS)."], takeaways: ["Confluence of 38.2% + former resistance = strong setup.", "Signals persistent buyer appetite."], commonMistakes: "Expecting 38.2% to hold in choppy, sideways market regimes.", quiz: { question: "When price pulls back to 38.2% and aligns with a prior broken swing high, what is this called?", options: ["A false breakout", "Structural Confluence (Fibonacci level aligned with former resistance)", "A market failure", "An inverted pattern"], correctIndex: 1, explanation: "When a Fibonacci level overlaps precisely with a former horizontal structural breakout, high-probability confluence is formed." } },
      { id: 6, title: "The 50% Level: Equilibrium", duration: "6 min", difficulty: "Intermediate", concept: "While not a pure Fibonacci sequence ratio, the 50.0% level is mathematically critical as the exact Equilibrium (fair value) midpoint of the range.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Equilibrium divides Premium from Discount.", "Widely utilized by algorithmic institutional models."], takeaways: ["50% is the psychological dividing line.", "Buying below 50% guarantees a discount entry."], commonMistakes: "Assuming 50% is a natural Fibonacci mathematical ratio (it is a Dow Theory equilibrium metric).", quiz: { question: "What is the primary technical significance of the 50% level?", options: ["It is the Golden Ratio", "It represents the exact mathematical Equilibrium dividing Premium from Discount", "It guarantees a reversal", "It has no significance"], correctIndex: 1, explanation: "50% marks the exact halfway equilibrium point between buyers and sellers, separating Premium and Discount." } },
      { id: 7, title: "The 61.8% Level: The Golden Ratio", duration: "7 min", difficulty: "Intermediate", concept: "The 61.8% ratio (Phi) is the primary Golden Ratio. It represents the quintessential sweet spot for trend retracements.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Offers prime risk-to-reward: deep discount with trend structure still intact.", "Often aligns with pristine Order Blocks and FVGs."], takeaways: ["The 61.8% level is the benchmark institutional retracement level.", "Look for lower-timeframe confirmation when price taps 61.8%."], commonMistakes: "Placing stop loss right at 61.9% instead of giving room past structural invalidation.", quiz: { question: "Why is the 61.8% level universally watched by technical analysts?", options: ["It is derived from the Golden Ratio and offers optimal discount pricing with intact structural safety", "It is the only level brokers permit", "It was invented by banks", "It always wins"], correctIndex: 0, explanation: "61.8% is the mathematical Golden Ratio, offering a deep discount while keeping the primary structural trend securely intact." } },
      { id: 8, title: "The Golden Pocket (61.8% – 66.6% / 65%)", duration: "7 min", difficulty: "Advanced", concept: "The Golden Pocket is the concentrated zone between the 61.8% ratio and the 65% / 66.6% retracement, where algorithms frequently exhaust counter-trend pullbacks.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["The zone between 61.8% and 66.6% is called the 'Golden Pocket'.", "Generates some of the highest risk-to-reward reversals in modern technical analysis."], takeaways: ["Treat the Golden Pocket as a zone, not a line.", "Watch for wick rejections inside the pocket."], commonMistakes: "Panic-selling when price wicks into 65% while assuming 61.8% was 'broken'.", quiz: { question: "What is the 'Golden Pocket' in modern technical trading?", options: ["A wallet for crypto", "The high-probability reversal zone situated between the 61.8% and 66.6% Fibonacci levels", "A trading award", "The market open hour"], correctIndex: 1, explanation: "The Golden Pocket is the institutional reaction band between 61.8% and 66.6%, famous for sharp trend resumptions." } },
      { id: 9, title: "The 78.6% Level: Deep Retracement", duration: "6 min", difficulty: "Advanced", concept: "The 78.6% level (square root of 0.618) represents the final line of defense before complete structural failure.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Extreme discount pricing.", "If 78.6% fails, the probability of a full 100% retracement (double bottom/top) is extremely high."], takeaways: ["Provides ultra-tight stop losses directly below the swing low.", "Lower win rate than 61.8%, but massive reward-to-risk (1:5+)."], commonMistakes: "Assuming 78.6% will always bounce; it frequently sweeps into liquidity.", quiz: { question: "What is the primary risk-to-reward advantage of entering a setup at the 78.6% level?", options: ["It has a 100% win rate", "Because your entry is so deep, your stop loss is exceptionally close, yielding immense R:R multiples", "Brokers give bonuses", "Zero spread"], correctIndex: 1, explanation: "Entering at 78.6% places you right next to the structural invalidation (100%), keeping risk tiny and potential reward huge." } },
      { id: 10, title: "Fibonacci Extensions Explained", duration: "6 min", difficulty: "Advanced", concept: "While retracements measure counter-trend pullbacks, Extensions project future price targets beyond the 100% swing high.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Used for objective profit taking when price is in price discovery.", "Key extensions: 127.2%, 161.8%, 200%, 261.8%."], takeaways: ["Extensions solve the question: 'Where do I take profit?'", "Removes greed from trade exits."], commonMistakes: "Holding forever hoping for 1000% extensions instead of taking profit at key levels.", quiz: { question: "What is the primary practical purpose of Fibonacci Extension levels?", options: ["To find entry points only", "To establish objective, mathematically sound profit targets beyond prior swing highs", "To measure market open", "To calculate taxes"], correctIndex: 1, explanation: "Fibonacci extensions project objective profit targets into new territory where no previous horizontal resistance exists." } },
      { id: 11, title: "The 127.2% Extension: First Target", duration: "6 min", difficulty: "Advanced", concept: "The 127.2% extension (square root of 1.618) is the primary first target where partial profits are prudently secured.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Frequently acts as temporary pause or consolidation zone.", "Ideal level to move stop-loss to breakeven."], takeaways: ["Lock in partial gains at 127.2%.", "De-risks your position while leaving runners."], commonMistakes: "Refusing to take any profits at 127.2% and watching price reverse to breakeven.", quiz: { question: "What is a recommended trade management action when price reaches the 127.2% extension?", options: ["Double position size", "Take partial profits and adjust stop-loss to protect capital", "Cancel all orders", "Panic sell everything"], correctIndex: 1, explanation: "Securing partial profits at 127.2% ensures you walk away green while preserving upside potential for larger targets." } },
      { id: 12, title: "The 161.8% Extension: The Golden Target", duration: "6 min", difficulty: "Advanced", concept: "The 161.8% extension is the premier expansion target. In harmonic and Elliott Wave theory, impulse wave 3 frequently terminates near 161.8%.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Massive institutional profit-taking occurs around 161.8%.", "Expect strong counter-trend reactions or multi-day consolidation."], takeaways: ["The 161.8% level is the primary macro target for swing traders.", "Look for exhaustion candles near 161.8%."], commonMistakes: "Initiating brand new long positions directly into the 161.8% extension target.", quiz: { question: "Why is initiating a new Long position directly at the 161.8% extension considered dangerous?", options: ["The stock is delisted", "Because 161.8% is a major institutional profit-taking target where exhaustion reversals frequently occur", "Trading is illegal at 161.8%", "It is not dangerous"], correctIndex: 1, explanation: "Entering long at 161.8% means buying into the exact price zone where smart money is actively selling to close their positions." } },
      { id: 13, title: "Combining Fibonacci with Market Structure & S/R", duration: "7 min", difficulty: "Advanced", concept: "Fibonacci levels should never be traded in isolation. Discover how stacking Fibonacci with Support/Resistance and Order Blocks creates unbeatable confluence.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Golden Pocket + Unmitigated Order Block + S/R flip = A+ Setup.", "Filters out 80% of weak, isolated Fib lines."], takeaways: ["A standalone Fib line has little edge.", "Confluence of Fib + Structure creates the institutional edge."], commonMistakes: "Trading every single Fibonacci line without checking if horizontal structure exists there.", quiz: { question: "What separates amateur Fibonacci charting from professional confluence analysis?", options: ["Amateurs buy every Fib line; professionals only execute when a Fib level overlaps with horizontal structure and order blocks", "Amateurs use green lines", "There is no difference", "Professionals trade without charts"], correctIndex: 0, explanation: "True technical edge comes from structural confluence—where Fibonacci overlaps with horizontal support, demand, or order blocks." } },
      { id: 14, title: "Practical Fibonacci Analysis Blueprint", duration: "7 min", difficulty: "Advanced", concept: "A complete step-by-step blueprint for drawing, validating, and managing Fibonacci retracement and extension setups.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Step 1: Confirm trend via BOS.", "Step 2: Anchor Fib tool across entire impulse leg.", "Step 3: Highlight Golden Pocket (61.8% - 66.6%).", "Step 4: Check for structural confluence."], takeaways: ["Follow the standardized blueprint.", "Fibonacci is your precision measuring caliper."], commonMistakes: "Moving Fibonacci anchors during an active trade to avoid admitting an invalidation.", quiz: { question: "What is the final lesson regarding Fibonacci analysis?", options: ["It replaces all other technical tools", "It is a precision measuring tool that enhances market structure, but must always be paired with strict risk management", "It guarantees wealth", "It is useless"], correctIndex: 1, explanation: "Fibonacci is an invaluable measurement caliper for market structure, but disciplined risk management remains mandatory." } }
    ]
  },
  {
    id: "course-11",
    title: "Technical Analysis Strategy Framework",
    shortDesc: "A complete, rule-based trading plan framework integrating context, bias, execution, risk-to-reward, and trade journaling.",
    difficulty: "Advanced",
    category: "Strategy",
    duration: "90 min",
    svgPreview: ChartDiagrams.supportResistance,
    chapters: [
      { id: 1, title: "Market Context & Macro Regime", duration: "6 min", difficulty: "Advanced", concept: "Before looking at charts, understand the macro market context: are we in a high-volatility regime, trending market, or low-volume summer consolidation?", diagram: ChartDiagrams.marketStructure, deepDive: ["Context dictates strategy: Trend strategies fail in ranges; range strategies fail in trends.", "Check major economic calendar releases."], takeaways: ["Context precedes strategy.", "Never execute in a vacuum."], commonMistakes: "Using breakout strategies in a dead range.", quiz: { question: "Why must a trader evaluate Market Context before applying a specific technical strategy?", options: ["Strategies perform differently depending on whether the market is trending, ranging, or hyper-volatile", "To know what clothes to wear", "To predict the exact close", "It is not necessary"], correctIndex: 0, explanation: "Trading strategies are regime-dependent: trend continuation systems fail in choppy ranges, while range systems get crushed in breakouts." } },
      { id: 2, title: "Higher-Timeframe Bias Confirmation", duration: "6 min", difficulty: "Advanced", concept: "Establish a non-negotiable daily directional bias. If the higher timeframe is bearish, all long signals on lower timeframes are filtered out.", diagram: ChartDiagrams.marketStructure, deepDive: ["Rules-based bias eliminates emotional hesitation.", "If bias is unclear, the optimal position is CASH."], takeaways: ["Trade in the direction of the dominant current.", "Cash is a valid, profitable position when bias is unclear."], commonMistakes: "Forcing trades on low-confidence days.", quiz: { question: "What should a disciplined trader do when the Higher-Timeframe Bias is messy, conflicted, and unclear?", options: ["Increase leverage to force a profit", "Remain in Cash and wait patiently for clarity to return", "Flip a coin", "Trade double position size"], correctIndex: 1, explanation: "Preserving capital by remaining in cash during ambiguous market conditions is a foundational hallmark of professional mastery." } },
      { id: 3, title: "Market Structure Mapping", duration: "6 min", difficulty: "Advanced", concept: "Mechanically mark the 4H/Daily external swing highs and swing lows. Note the last BOS or CHOCH and define whether current price is an impulse or retracement.", diagram: ChartDiagrams.marketStructure, deepDive: ["Eliminates subjective bias.", "Gives you a GPS map of exactly where price is auctioning."], takeaways: ["Never skip mapping structure.", "Know your invalidation boundaries."], commonMistakes: "Redrawing structure points after a trade goes against you.", quiz: { question: "What is the primary function of mapping market structure before session open?", options: ["To impress friends", "To establish an objective visual roadmap of current trend state and critical invalidation boundaries", "To pass time", "To avoid paying commissions"], correctIndex: 1, explanation: "Mapping structure provides an objective blueprint of current market state, removing guesswork before capital is committed." } },
      { id: 4, title: "Support & Resistance Confluence", duration: "6 min", difficulty: "Advanced", concept: "Identify the 2-3 most critical horizontal price levels where historical price memory and role reversal are strongest.", diagram: ChartDiagrams.supportResistance, deepDive: ["Prioritize levels with multiple historical touches and clean departures.", "Look for former resistance flipping to support."], takeaways: ["Less is more: 2 key levels beat 20 cluttered lines.", "Focus on higher timeframe structural zones."], commonMistakes: "Overcrowding charts with dozens of meaningless lines.", quiz: { question: "How many key horizontal support and resistance levels should ideally be monitored on an active chart?", options: ["50 to 100 lines", "2 to 3 high-conviction higher-timeframe inflection zones", "Zero", "One for every single candle"], correctIndex: 1, explanation: "Monitoring 2-3 high-conviction structural zones prevents visual clutter and allows laser-like execution focus." } },
      { id: 5, title: "Supply & Demand Zone Alignment", duration: "6 min", difficulty: "Advanced", concept: "Overlay fresh, unmitigated supply and demand zones that broke structure and possess energetic departure velocity.", diagram: ChartDiagrams.supplyDemand, deepDive: ["Check if the zone aligns with a 4H S/R level.", "Confirm whether the zone is virgin (unmitigated)."], takeaways: ["Align S/R with fresh supply/demand.", "Stacking independent tools builds high-conviction edge."], commonMistakes: "Trading mitigated supply zones in strong uptrends.", quiz: { question: "What gives a Supply or Demand zone the highest probability of holding price?", options: ["Being completely fresh (unmitigated) and having caused a structural break of market structure (BOS)", "Being touched 5 times", "Having small wicks", "Being colored blue"], correctIndex: 0, explanation: "A fresh zone that decisively broke market structure proves institutional orders remain resting and ready to defend." } },
      { id: 6, title: "Liquidity Pool Identification", duration: "6 min", difficulty: "Advanced", concept: "Map where retail stops are pooled: Equal Highs (BSL), Equal Lows (SSL), and trendline liquidity that algorithms are likely to hunt.", diagram: ChartDiagrams.liquiditySweep, deepDive: ["Identify target liquidity for take-profits.", "Anticipate sweeps before entering."], takeaways: ["Do not be the liquidity; trade WITH the liquidity sweep.", "Let others get stopped out first."], commonMistakes: "Entering directly ahead of prominent equal highs where sweeps are imminent.", quiz: { question: "Why must you identify resting liquidity pools before planning a trade?", options: ["To target them for exits and anticipate sweeps before entering", "To avoid broker fees", "To predict the weather", "It has no purpose"], correctIndex: 0, explanation: "Anticipating liquidity sweeps keeps you out of traps and provides high-probability targets for your profit exits." } },
      { id: 7, title: "SMC Integration & Order Blocks", duration: "6 min", difficulty: "Advanced", concept: "Select the specific Order Block and Fair Value Gap (FVG) inside your validated supply/demand zone that represents the origin of displacement.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Refine your POI to a single precise candle block.", "Verify that the FVG remains open and unmitigated."], takeaways: ["Refined POIs minimize stop loss distance.", "Always check for presence of an FVG."], commonMistakes: "Picking arbitrary candles without displacement.", quiz: { question: "What is the role of an Order Block within this unified strategy framework?", options: ["It serves as the refined, precise entry origin inside a broader demand or supply zone", "It is an order type at a brokerage", "It replaces stop losses", "It guarantees profit"], correctIndex: 0, explanation: "The Order Block acts as the laser-refined institutional entry origin inside a broader supply or demand zone." } },
      { id: 8, title: "Fibonacci Confluence Verification", duration: "6 min", difficulty: "Advanced", concept: "Measure the active swing range with your Fibonacci tool to confirm whether your chosen Order Block sits within the 61.8% – 66.6% Golden Pocket in Discount.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["If the Order Block is NOT in Discount, disqualify the trade.", "Ensures you never buy expensive premium prices."], takeaways: ["Fibonacci acts as a mathematical filter.", "Only take Longs in Discount; only take Shorts in Premium."], commonMistakes: "Ignoring Fibonacci equilibrium and buying at the very top of a range.", quiz: { question: "What should you do if an otherwise attractive Order Block sits at 20% retracement (deep Premium) for a Long?", options: ["Buy anyway with double size", "Disqualify or deprioritize the trade because it violates discount pricing rules", "Change the Fibonacci settings", "Short immediately"], correctIndex: 1, explanation: "Strict trading frameworks disqualify long setups in premium pricing, preventing you from buying at the top of an exhausted impulse." } },
      { id: 9, title: "Multi-Timeframe Confirmation Trigger", duration: "6 min", difficulty: "Advanced", concept: "Price arrives at your Confluence POI. Switch to the 15m or 5m chart and wait for a Lower-Timeframe CHOCH and displacement candle close.", diagram: ChartDiagrams.marketStructure, deepDive: ["This is the execution trigger.", "Zero confirmation = Zero trade."], takeaways: ["Patience to wait for the trigger separates pros from gamblers.", "The trigger provides a microscopic, logical stop loss."], commonMistakes: "Entering early with market orders because you feared missing out.", quiz: { question: "What triggers the actual order execution in this unified framework?", options: ["Price touching the zone line", "A confirmed Lower-Timeframe Change of Character (CHOCH) showing buyers/sellers taking control", "An emotional impulse", "A fixed clock time"], correctIndex: 1, explanation: "Execution occurs only when lower-timeframe structure confirms the reversal with an objective CHOCH and displacement." } },
      { id: 10, title: "Entry Confirmation & Execution Precision", duration: "6 min", difficulty: "Advanced", concept: "Executing the order upon retest of the lower-timeframe FVG or Breaker Block, locking in optimal fill and exact invalidation.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Use Limit orders at the LTF FVG.", "Stop loss goes safely beyond the swing low that created the sweep."], takeaways: ["Do not chase green candles.", "Let price pull back to your LTF entry block."], commonMistakes: "Market-buying after price has already exploded 30 pips past the trigger.", quiz: { question: "Where should your limit order be placed following a confirmed LTF CHOCH?", options: ["At the retest of the LTF Fair Value Gap or refined order block", "At the very peak of the impulse", "At your account balance", "Anywhere"], correctIndex: 0, explanation: "Placing your limit order at the LTF FVG retest provides precision fills with minimum drawdown." } },
      { id: 11, title: "Stop-Loss Concepts & Placement Rules", duration: "6 min", difficulty: "Advanced", concept: "Educational and Mathematical reality: A stop-loss is not an admission of defeat; it is your capital insurance policy. Learn logical structural placement.", diagram: ChartDiagrams.supportResistance, deepDive: ["Place stop where your thesis is proven wrong, NOT where your dollar pain limit is.", "Always add a small buffer for spread and liquidity wicks."], takeaways: ["Never trade without a hard stop-loss.", "If your stop is hit, your thesis was wrong. Move on."], commonMistakes: "Moving stop-loss further away during an active trade.", quiz: { question: "Where must a professional stop-loss be placed on a Long trade?", options: ["Where it hurts to lose $50", "Beyond the structural swing low that invalidates the trade hypothesis, with a small buffer", "Never use a stop loss", "At the entry price immediately"], correctIndex: 1, explanation: "Stops belong at the exact structural invalidation level where your trade thesis is mathematically proven incorrect." } },
      { id: 12, title: "Risk-to-Reward (RR) Mathematics", duration: "6 min", difficulty: "Advanced", concept: "Mastering the mathematics of expectancy: Why a trader with a 40% win-rate and a 1:3 RR is vastly more profitable than a 90% win-rate trader with negative RR.", diagram: ChartDiagrams.supportResistance, deepDive: ["Expectancy = (Win% * Avg Win) - (Loss% * Avg Loss).", "Never take a trade offering less than 1:2 Risk-to-Reward."], takeaways: ["Trading is a game of probability and asymmetric payoff.", "Protect capital; let math do the heavy lifting."], commonMistakes: "Risking $300 to make $50.", quiz: { question: "If you have a 40% win rate and an average Risk-to-Reward of 1:3 over 100 trades, what is your outcome?", options: ["You blow your account", "You are substantially profitable: 40 wins * 3R = +120R minus 60 losses * 1R = +60R net profit", "You break even exactly", "Math doesn't apply to trading"], correctIndex: 1, explanation: "With 1:3 RR, you only need a 30% win-rate to break even. At 40% win-rate, you generate an outstanding +60R net return!" } },
      { id: 13, title: "Trade Management & Scaling Out", duration: "6 min", difficulty: "Advanced", concept: "How to manage an open trade: moving stop to breakeven after Target 1 (127.2% / opposing liquidity) and letting the remainder run to major targets.", diagram: ChartDiagrams.fibonacciRetracement, deepDive: ["Take 50% profit at Target 1; move stop to Breakeven.", "The trade is now completely risk-free psychologically."], takeaways: ["De-risking trades preserves emotional stability.", "Never turn a winning trade into a large loser."], commonMistakes: "Suffering through a 5R winning trade all the way back into a full loss.", quiz: { question: "What is the primary psychological benefit of securing partial profit and setting stop to breakeven at Target 1?", options: ["It doubles your risk", "It completely eliminates financial risk on the trade, protecting emotional capital and capital reserves", "It guarantees you won't pay taxes", "There is no benefit"], correctIndex: 1, explanation: "De-risking a trade removes emotional anxiety, enabling you to hold the remaining runner stress-free toward macro targets." } },
      { id: 14, title: "Trading Journal & Metric Tracking", duration: "6 min", difficulty: "Advanced", concept: "You cannot improve what you do not measure. Learn the essential fields every serious student must log: screenshot, RR, emotional state, mistake tags.", diagram: ChartDiagrams.supportResistance, deepDive: ["Log every entry, exit, MAE (Maximum Adverse Excursion), and MFE.", "Review weekly to discover your true behavioral leakages."], takeaways: ["Your trading journal is your greatest mentor.", "Track data objectively, not emotionally."], commonMistakes: "Only logging winning trades and deleting losing trades from your journal.", quiz: { question: "Why is maintaining an honest trading journal considered the single most transformative habit for a student?", options: ["It allows you to identify your exact behavioral errors, statistical leaks, and edge over time", "It is required by the government", "To show off to others", "It isn't helpful"], correctIndex: 0, explanation: "An honest journal provides objective empirical feedback on your true behavioral flaws and statistical edge." } },
      { id: 15, title: "Building Your Personal Trading Plan", duration: "7 min", difficulty: "Advanced", concept: "Synthesize all 11 courses into a concise 1-page Personal Trading Plan. Risk disclosures, ethics, and emotional commitment to lifelong learning.", diagram: ChartDiagrams.orderBlockFVG, deepDive: ["Educational Notice: Technical analysis is a probabilistic skill requiring discipline, patience, and capital protection.", "Define your trading hours, risk per trade (max 1%), and daily stop limit."], takeaways: ["A written plan is your contract with yourself.", "Trade with knowledge, read the market, understand the structure."], commonMistakes: "Trading with real capital before proving consistency in a risk-free educational environment.", quiz: { question: "What should be the ultimate foundation of your personal trading plan?", options: ["Get rich as fast as possible with max leverage", "Strict risk management, emotional discipline, and a commitment to probabilistic execution without gambling", "Copying signals from strangers", "Trading every possible hour"], correctIndex: 1, explanation: "Longevity, discipline, disciplined risk limits (1% max risk), and treating technical analysis as an educational discipline constitute the ultimate trading foundation." } }
    ]
  }
];

// Trading Glossary Database
const TradingGlossary = [
  { term: "Candlestick", def: "A visual chart representation displaying the Open, High, Low, and Close prices for a specific duration of time.", example: "A 1-hour candlestick tracks price auction between 9:00 AM and 10:00 AM.", category: "Foundations", related: ["Wick", "Body", "OHLC"], courseId: "course-1" },
  { term: "Wick / Shadow", def: "The thin line extending above and below a candlestick's real body, representing the price extremes reached before closing.", example: "A long lower wick shows buyers aggressively rejected lower price levels.", category: "Foundations", related: ["Candlestick", "Hammer", "Rejection"], courseId: "course-1" },
  { term: "Real Body", def: "The rectangular colored portion of a candlestick between the opening and closing prices.", example: "A large green body indicates strong buyer conviction from open to close.", category: "Foundations", related: ["Candlestick", "Marubozu"], courseId: "course-1" },
  { term: "Support", def: "A historical price zone where buying interest is sufficiently strong to overcome selling pressure and halt a decline.", example: "Every time the asset drops to $150.00, buyers consistently bid it back up.", category: "Structure", related: ["Resistance", "Role Reversal", "Demand"], courseId: "course-3" },
  { term: "Resistance", def: "A historical price zone where selling pressure overcomes buying interest, acting as a ceiling against advances.", example: "Price repeatedly fails to penetrate above $200.00 due to heavy overhead supply.", category: "Structure", related: ["Support", "Role Reversal", "Supply"], courseId: "course-3" },
  { term: "Breakout", def: "When price moves decisively beyond a defined support or resistance boundary, confirmed by volume and candle close.", example: "Price closed a daily candle at $205.00 above the $200.00 resistance.", category: "Structure", related: ["Retest", "False Breakout"], courseId: "course-3" },
  { term: "Retest", def: "When price returns to test a newly broken support or resistance level to verify its new role before continuing.", example: "After breaking $200, price pulled back to $200 and bounced to $215.", category: "Structure", related: ["Breakout", "Role Reversal"], courseId: "course-3" },
  { term: "Supply Zone", def: "An institutional imbalance zone where aggressive sellers previously overwhelmed buyers, causing a rapid departure drop.", example: "A Rally-Base-Drop origin at $180 where unfilled sell limit orders remain.", category: "Structure", related: ["Demand", "Order Block", "Base"], courseId: "course-4" },
  { term: "Demand Zone", def: "An institutional imbalance zone where aggressive buyers overwhelmed sellers, initiating a rapid upward departure.", example: "A Drop-Base-Rally origin at $120 where large institutional bids were executed.", category: "Structure", related: ["Supply", "Order Block", "Mitigation"], courseId: "course-4" },
  { term: "Liquidity", def: "The pool of resting limit and stop orders available in the market required to fill large transactions without slippage.", example: "Resting buy stops above a double top provide liquidity for institutional sellers.", category: "Institutional", related: ["Buy-Side Liquidity", "Sell-Side Liquidity", "Sweep"], courseId: "course-6" },
  { term: "Buy-Side Liquidity (BSL)", def: "Resting buy-stop orders positioned above swing highs from short-sellers and breakout buyers.", example: "Clusters of stop orders resting above equal highs at $250.", category: "Institutional", related: ["Sell-Side Liquidity", "Equal Highs", "Sweep"], courseId: "course-6" },
  { term: "Sell-Side Liquidity (SSL)", def: "Resting sell-stop orders situated beneath swing lows from long traders and breakdown sellers.", example: "Stop losses clustered beneath the weekly low at $190.", category: "Institutional", related: ["Buy-Side Liquidity", "Equal Lows", "Sweep"], courseId: "course-6" },
  { term: "Liquidity Sweep", def: "When price temporarily pierces a high or low to trigger resting stops and immediately reverses back inside the range.", example: "Price spiked 15 cents above equal highs, filled buy orders, and closed red.", category: "Institutional", related: ["Stop Hunt", "BSL", "SSL"], courseId: "course-6" },
  { term: "BOS (Break of Structure)", def: "When price breaks and closes beyond the previous swing high (in uptrend) or swing low (in downtrend), confirming trend continuation.", example: "Price breaks past the $110 swing high and closes at $112, printing a bullish BOS.", category: "Structure", related: ["CHOCH", "Higher High", "Trend"], courseId: "course-5" },
  { term: "CHOCH (Change of Character)", def: "The earliest structural signal of a potential trend reversal, marked when price breaks the structural point that caused the final extreme.", example: "In an uptrend, price closes below the last Higher Low, triggering a bearish CHOCH.", category: "Structure", related: ["BOS", "Reversal", "Market Structure"], courseId: "course-5" },
  { term: "Order Block (OB)", def: "The final counter-trend candle before an aggressive displacement move that broke market structure, marking institutional order origin.", example: "The last down-close candle before a 100-pip explosive rally breaking resistance.", category: "Institutional", related: ["Supply", "Demand", "Fair Value Gap"], courseId: "course-7" },
  { term: "Fair Value Gap (FVG)", def: "A 3-candle price imbalance where Candle 1's high and Candle 3's low do not overlap, leaving an unfilled price vacuum in Candle 2.", example: "A massive green candle leaving a 30-cent void that price later revisits to mitigate.", category: "Institutional", related: ["Order Block", "Imbalance", "Displacement"], courseId: "course-7" },
  { term: "Premium", def: "The upper half (> 50%) of an active dealing range where price is considered relatively expensive, ideal for short setups.", example: "When a range is $100-$200, prices above $150 represent the Premium zone.", category: "Strategy", related: ["Discount", "Equilibrium"], courseId: "course-7" },
  { term: "Discount", def: "The lower half (< 50%) of an active dealing range where price is considered relatively cheap, ideal for long setups.", example: "Buying at $120 inside a $100-$200 range ensures you execute in the Discount zone.", category: "Strategy", related: ["Premium", "Equilibrium"], courseId: "course-7" },
  { term: "Fibonacci Retracement", def: "An analytical tool measuring percentage pullbacks (23.6%, 38.2%, 50%, 61.8%) within an impulse swing.", example: "Price rallied from $50 to $100 and pulled back exactly to the 61.8% level ($69.10).", category: "Strategy", related: ["Golden Pocket", "Extension"], courseId: "course-10" },
  { term: "Golden Pocket", def: "The high-probability reversal zone between the 61.8% and 66.6% Fibonacci retracement levels.", example: "Price dipped into the 61.8%-66.6% zone, touched an order block, and reversed up.", category: "Strategy", related: ["Fibonacci Retracement", "Order Block"], courseId: "course-10" },
  { term: "Fibonacci Extension", def: "A tool used to project mathematical profit targets (127.2%, 161.8%) beyond the previous swing high into price discovery.", example: "Taking partial profits when an impulse leg reaches the 161.8% extension target.", category: "Strategy", related: ["Fibonacci Retracement", "Take Profit"], courseId: "course-10" },
  { term: "Multi-Timeframe Analysis (MTF)", def: "The systematic practice of analyzing macro timeframes for trend bias and lower timeframes for precision execution.", example: "Checking Daily for trend, 4H for zones, and 15m for entry confirmation.", category: "Strategy", related: ["Top-Down Analysis", "Bias"], courseId: "course-9" },
  { term: "Risk-to-Reward (RR)", def: "The mathematical ratio comparing the potential loss (distance to stop loss) to potential profit (distance to take profit).", example: "A trade risking $50 to gain $200 has a favorable 1:4 Risk-to-Reward ratio.", category: "Strategy", related: ["Stop Loss", "Take Profit", "Expectancy"], courseId: "course-11" },
  { term: "Stop Loss", def: "A predetermined protective exit order designed to close a losing trade if price violates the invalidation boundary.", example: "Placing a protective stop loss $0.50 below the structural swing low.", category: "Strategy", related: ["Risk-to-Reward", "Invalidation"], courseId: "course-11" },
  { term: "Take Profit", def: "A predetermined target order that locks in profit when price reaches an expected objective or liquidity pool.", example: "Setting take-profit at the 127.2% Fibonacci extension level.", category: "Strategy", related: ["Risk-to-Reward", "Liquidity Pool"], courseId: "course-11" },
  { term: "Stop Hunt", def: "Educational trading terminology describing when price is drawn to sweep resting stop-loss liquidity before reversing.", example: "Price briefly pierced support by 10 pips, triggered stops, and immediately rallied.", category: "Institutional", related: ["Liquidity Sweep", "SSL", "BSL"], courseId: "course-6" },
  { term: "Displacement", def: "A sudden, energetic, large-bodied candle sequence indicating institutional conviction and order flow dominance.", example: "Three consecutive wide-spread candles surging through resistance leaving FVGs.", category: "Institutional", related: ["Order Block", "Fair Value Gap"], courseId: "course-8" }
];

// Helper functions for accessing course data
function getCourseById(courseId) {
  return AcademyCourses.find(c => c.id === courseId) || AcademyCourses[0];
}

function getLesson(courseId, lessonNum) {
  const course = getCourseById(courseId);
  const num = parseInt(lessonNum, 10) || 1;
  const chapter = course.chapters.find(ch => ch.id === num) || course.chapters[0];
  const nextNum = num < course.chapters.length ? num + 1 : null;
  const prevNum = num > 1 ? num - 1 : null;
  
  return {
    course,
    chapter,
    totalChapters: course.chapters.length,
    nextNum,
    prevNum
  };
}

// Global Search Helper
function searchAcademy(query) {
  if (!query || query.trim().length === 0) return { courses: [], lessons: [], glossary: [] };
  const q = query.toLowerCase().trim();

  const matchedCourses = AcademyCourses.filter(c => 
    c.title.toLowerCase().includes(q) || 
    c.shortDesc.toLowerCase().includes(q) ||
    c.difficulty.toLowerCase().includes(q)
  );

  const matchedLessons = [];
  AcademyCourses.forEach(c => {
    c.chapters.forEach(ch => {
      if (ch.title.toLowerCase().includes(q) || ch.concept.toLowerCase().includes(q)) {
        matchedLessons.push({
          courseId: c.id,
          courseTitle: c.title,
          lessonNum: ch.id,
          lessonTitle: ch.title,
          difficulty: ch.difficulty
        });
      }
    });
  });

  const matchedGlossary = TradingGlossary.filter(g => 
    g.term.toLowerCase().includes(q) || 
    g.def.toLowerCase().includes(q) ||
    g.related.some(r => r.toLowerCase().includes(q))
  );

  return {
    courses: matchedCourses.slice(0, 5),
    lessons: matchedLessons.slice(0, 8),
    glossary: matchedGlossary.slice(0, 5)
  };
}

if (typeof window !== 'undefined') {
  window.ChartDiagrams = ChartDiagrams;
  window.AcademyCourses = AcademyCourses;
  window.TradingGlossary = TradingGlossary;
  window.getCourseById = getCourseById;
  window.getLesson = getLesson;
  window.searchAcademy = searchAcademy;
}
