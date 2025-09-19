// export const Card = ({ children, className = '' }) => (
//   <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}>
//     {children}
//   </div>
// );

// export const CardHeader = ({ children, className = '' }) => (
//   <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
//     {children}
//   </div>
// );

// export const CardTitle = ({ children, className = '' }) => (
//   <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
//     {children}
//   </h3>
// );

// export const CardDescription = ({ children, className = '' }) => (
//   <p className={`text-sm text-gray-600 ${className}`}>
//     {children}
//   </p>
// );

// export const CardContent = ({ children, className = '' }) => (
//   <div className={`p-6 pt-0 ${className}`}>
//     {children}
//   </div>
// );
const cx = (...c) => c.filter(Boolean).join(" ");
export function Card({ children, className="" }) {
  return <div className={cx("rounded-lg border bg-white shadow-sm", className)}>{children}</div>;
}
export function CardHeader({ children, className="" }) {
  return <div className={cx("p-6 flex flex-col space-y-1.5", className)}>{children}</div>;
}
export function CardTitle({ children, className="" }) {
  return <h3 className={cx("text-2xl font-semibold tracking-tight", className)}>{children}</h3>;
}
export function CardDescription({ children, className="" }) {
  return <p className={cx("text-sm text-gray-600", className)}>{children}</p>;
}
export function CardContent({ children, className="" }) {
  return <div className={cx("p-6 pt-0", className)}>{children}</div>;
}
