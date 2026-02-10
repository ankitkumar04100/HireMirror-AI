def calculate_readiness(scores: dict):
    # Simple weighted average for demonstration
    total = sum(scores.values())
    count = len(scores)
    return round(total / count, 2)
